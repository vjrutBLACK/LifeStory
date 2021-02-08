export class AppError extends Error {
  code?: Error;
  constructor(message: string, code?: Error) {
    super(message);
    this.code = code;
  }
}

export interface RelationShip {
  id: string;
  createdAt: Date;
  groups: string;
  cover: string;
  users: User[] | [];
}

export interface User {
  name: string;
  relationship: string;
  phone: string;
  dateOfBirth: string;
  mutualFriends: number;
  albums: Album[];
}
export interface Year {
  id: string;
  createdAt: Date;
  year: string;
  cover: string;
  months: Month[] | [];
}

export interface Month {
  month: string;
  shortName: string;
  albums: Album[];
}
export interface Album {
  id: string;
  thumbnail: string;
  images: ImageType[];
}

export interface ImageType {
  id: string;
  url: string;
}
