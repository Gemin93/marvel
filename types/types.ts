export type ResourceList = {
  available: number;
  returned?: number;
  collectionURI: string;
  items: Items[];
};

export type Items = {
  resourceURI: string;
  name: string;
  role?: string;
};

export type Thumbnail = {
  path: string;
  extension: string;
};
export type Urls = {
  type: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  urls: Urls[];
  thumbnail: Thumbnail;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  series: ResourceList;
};

export type Comics = {
  id: number;
  title: string;
  description: string;
  modified: Date;
  pageCount: number;
  urls: Urls[];
  series: Items;
  variants: Items[];
  collections: Items[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  events: ResourceList;
};

export type Creators = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  ursl: Urls[];
  thumbnail: Thumbnail;
  series: ResourceList;
  stories: ResourceList;
  comics: ResourceList;
  events: ResourceList;
};

export type Events = {
  id: number;
  title: string;
  description: string;
  ursl: Urls[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Thumbnail;
  comics: ResourceList;
  stories: ResourceList;
  series: ResourceList;
  characters: ResourceList;
  creators: ResourceList;
};

export type Series = {
  id: number;
  title: string;
  description: string;
  ursl: Urls[];
  modified: Date;
  startYear: number;
  endYear: number;
  rating: string;
  thumbnail: Thumbnail;
  creators: ResourceList;
  characters: ResourceList;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
};

export type Stories = {
  id: number;
  title: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  comics: ResourceList;
  series: ResourceList;
  events: ResourceList;
  characters: ResourceList;
  creators: ResourceList;
};
