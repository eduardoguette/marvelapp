export interface CommicsData {
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Commics[]
}

export interface Commics {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string

  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: URL[]
  series: Series
  variants: Series[]

  thumbnail: Thumbnail
  images: Thumbnail[]
  creators: Creators
  characters: CharactersClass
  stories: Stories
  events: CharactersClass
}

export interface CharactersClass {
  available: number
  collectionURI: string
  items: Series[]
  returned: number
}

export interface Series {
  resourceURI: string
  name: string
}

export interface Creators {
  available: number
  collectionURI: string
  items: CreatorsItem[]
  returned: number
}

export interface CreatorsItem {
  resourceURI: string
  name: string
}

export interface Thumbnail {
  path: string
  extension: Extension
}

export enum Extension {
  Jpg = 'jpg',
}

export interface Stories {
  available: number
  collectionURI: string
  items: StoriesItem[]
  returned: number
}

export interface StoriesItem {
  resourceURI: string
  name: string
  type: ItemType
}

export enum ItemType {
  Cover = 'cover',
  InteriorStory = 'interiorStory',
}

export interface TextObject {
  type: string
  language: string
  text: string
}
