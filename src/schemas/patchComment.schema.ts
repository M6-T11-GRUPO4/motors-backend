import * as yup from "yup";

const patchCommentSchema = yup.object().shape({
  comment: yup
    .string()
    .required("Comentário sobre o veículo é obrigatório")
    .min(3, "Mínimo 3 caracteres"),
});

export default patchCommentSchema;
