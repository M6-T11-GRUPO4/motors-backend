import * as yup from "yup";

export const postImageSchema = yup.object().shape({
  url: yup
    .string()
    .url("Apenas urls são permitidas")
    .required("URL da imagem é obrigatória"),
  vehicleId: yup
    .string()
    .uuid("Apenas IDs válidos são permitidos")
    .required("ID do veículo é obrigatório"),
});

export default postImageSchema;
