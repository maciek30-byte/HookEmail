import {colaEmail1, colaEmail2} from "./email";

export const sendEmail = async (a: string)=> {
    const nodemailer = require("nodemailer");
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: colaEmail1.username, // generated ethereal user
            pass: colaEmail1.pass, // generated ethereal password
        },
    });

    const temp = `<form action="'http://localhost:3114/email" method="get"><button type="submit">Click on me</button></form>`

    let info = await transporter.sendMail({
        from: colaEmail1.username, // sender address
        to: colaEmail2.username, // list of receivers
        subject: `Hello ${a}`, // Subject line
        html: "<a href='http://localhost:3114/email'>Click me</a>"
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    // dodac catcha podczas wywolania funkcja



}
