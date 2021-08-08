import { BlobServiceClient, ContainerClient } from "@azure/storage-blob"

// From  https://docs.microsoft.com/azure/developer/javascript/tutorial/browser-file-upload-azure-storage-blob

// CONSTANT
const STORAGE_ACCOUNT_NAME = "nzmsablob"

export const azureBlobURL = `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`

export const blobToFile = (blob: Blob | undefined, fileName: string) => {
  if (blob) {
    const file = new File([blob], fileName)
    return file
  }
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

const uploadFileToBlob = async (
  file: File | null,
  token: string,
  containerName: string
) => {
  if (!file) {
    console.log("no file")
    return []
  }

  // get blobService
  const blobService = new BlobServiceClient(
    `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net/?${token}`
  )

  // Get container
  const containerClient: ContainerClient =
    blobService.getContainerClient(containerName)

  // Creates container if doesnt exist in account
  await containerClient.createIfNotExists({
    access: "container",
  })

  // Pass containerClient and file to upload data
  await createBlobInContainer(containerClient, file)

  //   return getBlobsInContainer(containerClient)
}

export default uploadFileToBlob
