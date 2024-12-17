const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: email, // E-mail do usuário que preencheu o formulário
    to: 'guilhermebarroso166@gmail.com', // Seu e-mail
    subject: 'Contato do formulário',
    text: `Email: ${email}\n\nMensagem:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao enviar e-mail');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.status(200).send('E-mail enviado com sucesso!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
