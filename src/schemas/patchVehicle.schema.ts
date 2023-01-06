import * as yup from "yup";

export const patchVehicleSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  price: yup.number(),
  year: yup.number(),
  km: yup.number(),
  type: yup.string(),
  is_active: yup.boolean(),
  image: yup.array().of(yup.string()),
  userId: yup.string().uuid("Apenas IDs válidos são permitidos"),
});

export default patchVehicleSchema;
