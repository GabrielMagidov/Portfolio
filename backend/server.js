require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Mailjet = require("node-mailjet");

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const sendEmail = async (fromEmail, subject, text) => {
  try {
    const messageContent = `
      <p>${text}</p>
      <p>From: ${fromEmail}</p>
    `;

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "gabrielportfolio78@gmail.com",
            Name: "Gabriel's Portfolio",
          },
          To: [
            {
              Email: "gabrielmag1999@gmail.com",
              Name: "Gabriel Portfolio",
            },
          ],
          Subject: subject,
          TextPart: `${text}\n\nFrom: ${fromEmail}`,
          HTMLPart: messageContent,
        },
      ],
    });

    const response = await request;
    console.log("Mailjet response:", response.body);
    return response.body;
  } catch (error) {
    console.error("Mailjet error:", error);
    throw new Error("Email sending failed");
  }
};

app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body; // Email from the form

  try {
    const result = await sendEmail(email, subject, message);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
