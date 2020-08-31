const BASE_URL = 'https://my-json-server.typicode.com/open-veezoo/editor'

export const loadFilesApi = async (path, params) => {
  const url = `${BASE_URL}/filetree`
  const response = await fetch(url)
  const json = await response.json()
  return json
}

export const loadFileApi = async (fileId) => {
  const url = `${BASE_URL}/files/${fileId}`
  const response = await fetch(url)
  const json = await response.json()
  return json
}

export const saveFileApi = async (file) => {
  const url = `${BASE_URL}/files/${file.id}`
  const body = new FormData()
  body.append('id', file.id)
  body.append('name', file.name)
  body.append('content', file.content)

  fetch(url, {
    method: 'PUT',
    body: body,
  })

}

export const deleteFileApi = async (fileId) => {
  const url = `${BASE_URL}/files/${fileId}`
  fetch(url, {
    method: 'DELETE'
  })

}