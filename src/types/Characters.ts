export interface Characters {
  data: CharactersData
}

export interface CharactersData {
  offset: number
  limit: number
  total: number
  count: number
  results: CharactersResult[]
}

export interface CharactersResult {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  comics: Comics
}

export interface Comics {
  available: number
  collectionURI: string
  items: ComicsItem[]
}

export interface ComicsItem {
  resourceURI: string
  name: string
}

export interface Thumbnail {
  path: string
  extension: string
}
