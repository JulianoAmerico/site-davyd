var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 465,
    secure: true,
    auth: {
        user: "juriam_man@hotmail.com",
        pass: "rosangelam"
    }
});

var mailOptions = {
    from: '"Você" <juriam_man@hotmail.com>',
    to: "juriam_man@hotmail.com",
    subject: "Nodejs - Teste para o tutorial ✔✔",
    text: "O teste foi efectuado com sucesso"
}

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    }else{
        console.log("Mensagem enviada com sucesso");
    }
});