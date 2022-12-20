export interface IVehicle {
  id: string;
  name: string;
  description: string;
  price: number;
  year: number;
  km: number;
  type: string;
  user_mokado: string;
  is_active: boolean;
}

export interface IVehicleId {
  id: string;
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
  image?: string[];
}

export interface IVehiclePatchRequest {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  year?: number;
  km?: number;
  type?: string;
  user_mokado?: string;
  is_active: boolean
}

export interface IImage {
  id: string;
  url: string;
}

export interface IImageRequest {
  url: string;
}
