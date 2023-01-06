import { createTransport } from "nodemailer";
import { IEmailRequest } from "./interfaces";
import "dotenv/config";

const sendEmail = async ({ subject, text, to }: IEmailRequest) => {
  var transporter = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter
    .sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: text
    })
    .then(() => {
      console.log("Email enviado com sucesso");
    })
    .catch((err) => {
      throw new Error("Erro no envio do e-mail, tente novamente mais tarde");
    });
};

export { sendEmail };
