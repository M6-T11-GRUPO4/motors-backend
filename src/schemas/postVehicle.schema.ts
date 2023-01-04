import * as yup from "yup";

export const postVehicleSchema = yup.object().shape({
  name: yup.string().required("Nome do veículo é obrigatório"),
  description: yup.string().required("Descrição do veículo é obrigatório"),
  price: yup.number().required("Valor do carro é obrigatório"),
  year: yup.number().required("Ano do veículo é obrigatório"),
  km: yup.number().required("Kilometragem do veículo é obrigatória"),
  type: yup.string().required("Tipo de veículo é obrigatório"),
  is_active: yup.boolean(),
  image: yup.array().of(yup.string()),
});

export default postVehicleSchema;
