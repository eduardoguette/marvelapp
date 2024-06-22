import axios from 'axios'

  const defaults = {
  baseUrl: 'https://gateway.marvel.com:443/v1/public/',
  queryParams: {
    apikey: '54d2294be5f84e38f732119e45c34b88',
    limit: 50,
    offset: 0
  }
}

export const marvelappApi = axios.create({
  baseURL: defaults.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  params: defaults.queryParams
})
