import { createTransport } from "nodemailer";
import { IEmailRequest } from "./interfaces";
import { prisma } from "./prismaClient";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import "dotenv/config";

const sendEmail = async (email: string) => {
  var transporter = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const user = await prisma.user.findUnique({ where: { email: email } });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        partialsDir: path.resolve("./src/views/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/views/"),
    })
  );

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user?.email,
    subject: `Motors Shop - Recuperação de senha`,
    template: "email",
    attachments: [
      {
        filename: "NameShop.png",
        path: "./src/views/attachments/NameShop.png",
        cid: 'NameShop.png'
      },
    ],

    context: {
      name: user?.name,
      email: user?.email,
      token: user?.passwordResetToken,
      image: "./src/views/attachments/NameShop.png",
    },
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("Email enviado com sucesso");
    })
    .catch((err) => {
      throw new Error("Erro no envio do e-mail, tente novamente mais tarde");
    });
};

export { sendEmail };
