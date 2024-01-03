"use strict";
const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "abc@gmail.com",
//         pass: "pass@123"
//     }
// });


var mailConfig;
if (process.env.NODE_ENV === 'production' ){
    // all emails are delivered to destination
    mailConfig = {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: 'real.user',
            pass: 'verysecret'
        }
    };
} else {
    // all emails are catched by ethereal.email
    mailConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ethereal.user@ethereal.email',
            pass: 'verysecret'
        }
    };
}


let transporter = nodemailer.createTransport(mailConfig);


// async..await is not allowed in global scope, must use a wrapper
async function sendMail(mailData) {
    return new Promise(async (resolve, reject) => {
        try {


            nodemailer.createTestAccount((err, account) => {
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: account.user, // generated ethereal user
                        pass: account.pass  // generated ethereal password
                    }
                });
            
                transporter.sendMail({
                    from: 'noreply@domain.com',
                    to: 'whatever@otherdomain.com',
                    subject: mailData?.Subject, // Subject line
                    html: mailData?.Content, // html body
                }).then(info=>{
                    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
                }).catch((error) => {
                    console.log(error)
                })
                
            });


            // let testAccount = await nodemailer.createTestAccount();
            // // send mail with defined transport object
            // const info = await transporter.sendMail({
            //     from: 'noreply@domain.com',
            //     to: 'whatever@otherdomain.com',
            //     subject: mailData?.Subject, // Subject line
            //     html: mailData?.Content, // html body
            // });

            // console.log("Message sent: %s", info.messageId);
            resolve(true)
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            //
            // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
            //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
            //       <https://github.com/forwardemail/preview-email>
        } catch (error) {
            console.log("============ Error while sending mail ==========");
            console.log(error);
            reject(error)
        }
    })
  //
}

module.exports = {
    sendMail
}