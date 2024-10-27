// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"/views")));

app.get("/",async(req,res)=>{
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.render("index.ejs");
})


app.post("/mail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use an app password if using Gmail
    },
  });

  const mailOptions = {
    from: {
      name,
      address: "zairza.send@gmail.com",
    },
    to: "edupulse.zairza24@gmail.com",
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

const PORT =  process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
