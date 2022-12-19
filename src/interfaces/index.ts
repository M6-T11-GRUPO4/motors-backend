export interface IVehicle {
  id: String;
  name: String;
  description: String;
  price: Number;
  year: Number;
  km: Number;
  type: String;
  user_mokado: String;
  is_active: Boolean;
}

export interface IVehicleRequest {
  name: string;
  description: string;
  price: number;
  year: number;
  km: number;
  type: string;
  user_mokado: string;
  is_active: boolean;
  image?: string[]
}

export interface IImage {
  id: string;
  url: string;
}

export interface IImageRequest {
  url: string;
}
