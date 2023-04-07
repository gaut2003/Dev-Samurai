"use strict";
const nodemailer = require("nodemailer");
module.exports.sendMail=async function sendMail(str,data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "agarwalg131@gmail.com",
      pass: "vepxchbpxmxsdqus",
    },
  });
  if(str === 'signedup'){
    let info = await transporter.sendMail({
      from: '"HackFest 👻" <agarwalg131@gmail.com>',
      to: data.email,
      subject: `Hey ${data.firstname} ${data.lastname} Thank You for Signing up!`,
      html: "<b>Hola!You are now a part of Dev Samurai Team</b>",
    });
  }else{
    let info = await transporter.sendMail({
      from: '"HackFest 👻" <agarwalg131@gmail.com>',
      to: data.email,
      subject: `Thank You for Signing in!`,
      html: "<b>Welcome Back to the team of Dev Samurai's</b>",
    });
  }
}