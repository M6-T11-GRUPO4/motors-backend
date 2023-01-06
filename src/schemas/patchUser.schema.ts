import * as yup from "yup";

const patchUserSchema = yup.object().shape({
  name: yup.string().min(3, "Mínimo 3 caracteres"),
  email: yup.string().email("Email inválido"),
  password: yup.string(),
  cpf: yup.string().min(11, "CPF inválido").max(11, "CPF inválido"),
  birthdate: yup.string(),
  cellphone: yup
    .string()
    .matches(/^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{7}$/, "Telefone inválido"),
  description: yup.string(),
  is_active: yup.boolean(),
});

export default patchUserSchema;
