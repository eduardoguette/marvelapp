export interface CommicsData {
  data:            Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Commics[];
}

export interface Commics {
  id:                 number;
  digitalId:          number;
  title:              string;
  issueNumber:        number;
  variantDescription: string;
  description:        string;
  modified:           string;
  isbn:               string;
  upc:                string;
  diamondCode:        string;
  ean:                string;
  format:             Format;
  pageCount:          number;
  textObjects:        TextObject[];
  resourceURI:        string;
  urls:               URL[];
  series:             Series;
  variants:           Series[]; 
  dates:              DateElement[]; 
  thumbnail:          Thumbnail;
  images:             Thumbnail[];
  creators:           Creators;
  characters:         CharactersClass;
  stories:            Stories;
  events:             CharactersClass;
}

export interface CharactersClass {
  available:     number;
  collectionURI: string;
  items:         Series[];
  returned:      number;
}

export interface Series {
  resourceURI: string;
  name:        string;
}

export interface Creators {
  available:     number;
  collectionURI: string;
  items:         CreatorsItem[];
  returned:      number;
}

export interface CreatorsItem {
  resourceURI: string;
  name:        string;
  role:        Role;
}

export enum Role {
  Colorist = "colorist",
  ColoristCover = "colorist (cover)",
  Editor = "editor",
  Inker = "inker",
  InkerCover = "inker (cover)",
  Letterer = "letterer",
  Penciler = "penciler",
  PencilerCover = "penciler (cover)",
  Penciller = "penciller",
  PencillerCover = "penciller (cover)",
  Writer = "writer",
}

export interface DateElement {
  type: DateType;
  date: string;
}

export enum DateType {
  DigitalPurchaseDate = "digitalPurchaseDate",
  FocDate = "focDate",
  OnsaleDate = "onsaleDate",
  UnlimitedDate = "unlimitedDate",
}

export enum Format {
  Comic = "Comic",
  DigitalVerticalComic = "Digital Vertical Comic",
  Hardcover = "Hardcover",
  TradePaperback = "Trade Paperback",
}

export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export enum Extension {
  Jpg = "jpg",
}
 
export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export enum ItemType {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface TextObject {
  type:     string;
  language: string;
  text:     string;
}

 

 