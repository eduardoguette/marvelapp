import axios from 'axios'
const defaults = {
  baseUrl: 'https://gateway.marvel.com:443/v1/public/',
  queryParams: {
    apikey: '54d2294be5f84e38f732119e45c34b88',
    limit: 50,
    offset: 0,
    ts: 'thesoer',
    hash: '9ee6127ed0c9100f3e6722f9ae83d15d',
  },
}

export const marvelappApi = axios.create({
  baseURL: defaults.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  params: defaults.queryParams,
})
