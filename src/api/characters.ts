import { marvelappApi } from './config'

export const defaults = {
  getAllCharacters: '/characters',
}

export const characters = {
  getAll: () => marvelappApi.get(defaults.getAllCharacters),
  getByName: (name: string) =>
    marvelappApi.get(`${defaults.getAllCharacters}?name=${name}`),
  getById: (id: string) =>
    marvelappApi.get(`${defaults.getAllCharacters}/${id}`),
  getCommics: (id: string) =>
    marvelappApi.get(`${defaults.getAllCharacters}/${id}/comics`),
}
