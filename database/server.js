const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002, () => console.log("Server Running"));
const contactEmail = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'kenny.daugherty81@ethereal.email',
      pass: 'eZFmFpCb1cp7MnVxdu'
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const mobilenumber =req.body.mobilenumber;
    const email = req.body.email;
    const password =req.body.password
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "kasireddylaxmi66040@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Mobilenumber:${mobilenumber}</P>
             <p>Email: ${email}</p>
             <p>Password: ${password}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });