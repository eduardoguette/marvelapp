import { marvelappApi } from './config'

export const defaults = {
  getAllCharacters: '/characters'
}

 
export const characters = {
  getAll: () => marvelappApi.get(defaults.getAllCharacters),
  getById: (id: string) => marvelappApi.get(`${defaults.getAllCharacters}/${id}`),
  getCommics: (id: string) => marvelappApi.get(`${defaults.getAllCharacters}/${id}/comics`)
}
