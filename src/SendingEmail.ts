import { userEmail, Email } from "./email";

export const sendingEmail = async (
  from: Email,
  to: Email,
  message: unknown
) => {
  const nodemailer = require("nodemailer");
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: from.username, // generated ethereal user
      pass: from.pass, // generated ethereal password
    },
  });

  // const temp = `<form action="'http://localhost:3114/email" method="get"><button type="submit">Click on me</button></form>`

  let info = await transporter.sendMail({
    from: from.username, // sender address
    to: to.username, // list of receivers
    subject: `Hello  `, // Subject line
    html: message,
    // confirmation object
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  //important !! add catch when execute function !!!
};
