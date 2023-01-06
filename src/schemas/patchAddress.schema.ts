import * as yup from "yup";

const patchAddressSchema = yup.object().shape({
  cep: yup.string().min(8, "CEP inválido").max(8, "CEP inválido"),
  state: yup.string(),
  city: yup.string(),
  street: yup.string(),
  number: yup.string(),
  complement: yup.string(),
});

export default patchAddressSchema;
