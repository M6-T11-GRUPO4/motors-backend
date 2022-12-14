export interface IVehicle {
  id: string;
  name: string;
  description: string;
  price: number;
  year: number;
  km: number;
  type: string;
  is_active: boolean;
  userId: string;
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
  type: "Carro" | "Moto";
  is_active?: boolean;
  image?: string[];
  userId: string;
}

export interface IVehiclePatchRequest {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  year?: number;
  km?: number;
  type?: string;
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

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: string;
  cpf: string;
  birthdate: string;
  cellphone: string;
  description: string;
  is_seller: boolean;
  is_active: boolean;
  vehicles: string[];
}

export interface IUserId {
  id: string;
}

export interface IUserRequest extends IAddressRequest {
  name: string;
  email: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: string;
  cpf: string;
  birthdate: string;
  cellphone: string;
  description: string;
  is_seller?: boolean;
  is_active?: boolean;
}

export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ResponseLogin {
  body: {
    token: string;
  };
}

export interface ICommentRequest {
  comment: string;
  vehicleId: string;
  userId: string;
}

export interface IEmailRequest {
  to: string;
  subject: string;
  text: string;
}

export interface IResetPassword {
  email: string;
  token: string;
  password: string;
}
