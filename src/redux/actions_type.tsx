export interface Action<P = {}, E = {}> {
  type: string;
  payload?: P;
  error?: E;
}

export const CREATE_FOLDER = 'CreateFolder';
export const CAMERA = 'Camera';
export const SLIDERS = 'SlidersPage';
export enum Gender {
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}
