const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
const { purchase } = require("./purchase_template");
const { resetPass } = require("./resetpass_template");


const getEmailData = (to, name, token, template, actionData) => {
    let data = null;

    switch (template) {
        case "welcome":
            data = {
                from: "E-Shoes <e-shoes.customer-care@mail.com>",
                to,
                subject: `Welcome to E-Shoes ${name}`,
                html: welcome()
            }
            break;
        case "purchase":
            data = {
                from: "E-Shoes <e-shoes.customer-care@mail.com>",
                to,
                subject: `Thanks for shopping with us ${name}`,
                html: purchase(actionData)
            }
            break;
        case "reset_password":
            data = {
                from: "E-shoes <e-shoes.guitars.customer-care@mail.com>",
                to,
                subject: `Hey ${name}, reset your pass`,
                html: resetPass(actionData)
            }
            break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, token, type, actionData = null) => {

    const smtpTransport = mailer.createTransport({
        service: "Sendgrid",
        auth: {
            user: "avo1992",
            pass: 'minhkhang1'
        }
    });

    const mail = getEmailData(to, name, token, type, actionData)

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            cb()
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail }