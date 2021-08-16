import { BlobServiceClient, ContainerClient } from "@azure/storage-blob"

/* From  https://docs.microsoft.com/azure/developer/javascript/tutorial/browser-file-upload-azure-storage-blob
 *  Contains all api for application to interact with Azure Storage Blob
 *  Key function: Upload file to Azure Storage Blob
 */

const STORAGE_ACCOUNT_NAME = "nzmsablob"

export const azureBlobURL = `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`

// Converts Blob object to File object
export const convertBlobToFile = (blob: Blob, fileName: string) => {
  const file = new File([blob], fileName)
  return file
}

const createBlobInContainer = async (
  containerClient: ContainerClient,
  file: File
) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name)

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } }

  // upload file
  await blobClient.uploadData(file, options)
}

interface IUploadFileToBlob {
  file: File
  token: string
  containerName: string
}

const uploadFileToBlob = async ({
  file,
  token,
  containerName,
}: IUploadFileToBlob) => {
  // Return if no file
  if (!file) {
    return []
  }

  // get blobService
  const blobService = new BlobServiceClient(
    `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net/?${token}`
  )

  // Get container
  const containerClient: ContainerClient = blobService.getContainerClient(
    containerName
  )

  // Creates container if doesnt exist in account
  try {
    await containerClient.createIfNotExists({
      access: "container",
    })
  } catch (err) {
    console.error("container already exist. Will not create container")
  }

  // Pass containerClient and file to upload data
  try {
    await createBlobInContainer(containerClient, file)
  } catch (err) {
    console.error("Failed to create blob in container")
  }
}

export const convertAndUploadFileToAzure = async (
  token: string,
  githubName: string,
  cardImage: Blob
) => {
  const fileName = new Date().toISOString()
  const file = convertBlobToFile(cardImage!, fileName)
  const uploadToAzurePayload = {
    file,
    token: token!,
    containerName: githubName!,
  }
  try {
    await uploadFileToBlob(uploadToAzurePayload)
    const photoURI = `${azureBlobURL}/${githubName}/${file.name}`
    return photoURI
  } catch (err) {
    console.error(err)
  }
}

export default uploadFileToBlob
