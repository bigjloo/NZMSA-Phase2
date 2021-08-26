import { BlobServiceClient, ContainerClient } from "@azure/storage-blob"

/* From  https://docs.microsoft.com/azure/developer/javascript/tutorial/browser-file-upload-azure-storage-blob
 *  Contains all api for application to interact with Azure Storage Blob
 */

// Each user are allocated their own container to store photos
// Container's name is set using the user's Github name

const STORAGE_ACCOUNT_NAME = "nzmsablob"
const AZURE_STORAGE_BLOB_URL = `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`

type rawUploadData = {
  cardImage: Blob
  token: string
  githubName: string
}

// Converts photo to file object and uploads
// to Azure Storage Blob with user's Github name as container.
// Returns the URI of uploaded photo
export const uploadFileToAzure = async ({
  cardImage,
  token,
  githubName,
}: rawUploadData) => {
  const file = createFileFrom(cardImage)

  const userContainerClient = getContainerClientFromAzure(
    AZURE_STORAGE_BLOB_URL,
    token,
    githubName
  )

  try {
    await userContainerClient.createIfNotExists({
      access: "container",
    })
    createBlobInContainer(userContainerClient, file)
  } catch (err) {
    console.error(err)
    return
  }
  const photoURI: string = `${AZURE_STORAGE_BLOB_URL}/${githubName}/${file.name}`
  return photoURI
}

// Returns file object from blob object using
// current date time as file name
const createFileFrom = (cardImage: Blob) => {
  const fileName = new Date().toISOString()
  const file = new File([cardImage], fileName)
  return file
}

// Returns user's container client from Azure Storage Blob
const getContainerClientFromAzure = (
  storageAccountUrl: string,
  token: string,
  containerName: string
) => {
  const blobService = new BlobServiceClient(`${storageAccountUrl}/?${token}`)
  const containerClient = blobService.getContainerClient(containerName)
  return containerClient
}

// Upload file to Blob in user container
const createBlobInContainer = (
  containerClient: ContainerClient,
  file: File
) => {
  const blobClient = containerClient.getBlockBlobClient(file.name)
  const options = { blobHTTPHeaders: { blobContentType: file.type } }
  blobClient.uploadData(file, options)
}
