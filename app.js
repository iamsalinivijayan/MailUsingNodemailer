const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'itssalinivijayan@gmail.com',
        pass: "gtfedjedfzggvcdg",
    }
});

const mailOptions = {
    from: "itssalinivijayan@gmail.com",
    to: "iamsalinivijayan@gmail.com",
    subject: "Test mail",
    text: "Hello, this is a test mail send using Nodemailer."  
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Error sending email:", error);
    } else {
        console.log("Email sent: "+ info.response);
    }
});