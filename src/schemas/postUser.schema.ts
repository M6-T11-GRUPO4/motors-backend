import * as yup from "yup";

const postUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Mínimo 3 caracteres")
    .required("Nome é um campo obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Email é um campo obrigatório"),
  password: yup.string().required("Senha é um campo obrigatório"),
  cpf: yup
    .string()
    .min(11, "CPF inválido")
    .max(11, "CPF inválido")
    .required("CPF é um campo obrigatório"),
  birthdate: yup.string().required("Data de nascimento é um campo obrigatório"),
  cellphone: yup
    .string()
    .required("Telefone é um campo obrigatório")
    .matches(/^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{7}$/, "Telefone inválido"),
  description: yup.string().required("Descrição é um campo obrigatório"),
  is_seller: yup.boolean(),
  cep: yup
    .string()
    .required("CEP é um campo obrigatório")
    .min(8, "CEP inválido")
    .max(8, "CEP inválido"),
  state: yup.string().required("Estado é um campo obrigatório"),
  city: yup.string().required("Cidade é um campo obrigatório"),
  street: yup.string().required("Rua é um campo obrigatório"),
  number: yup.string().required("Número é um campo obrigatório"),
  complement: yup.string(),
});

export default postUserSchema;
