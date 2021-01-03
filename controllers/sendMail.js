const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const  MAILING_SERVICE_CLIENT_ID ='1025999669036-m1cjtdr24te1g83abphl76thrcljko6i.apps.googleusercontent.com'
const  MAILING_SERVICE_CLIENT_SERECT ='oNLdfgTTx0IZYT8eXxy7d2-M'
const  MAILING_SERVICE_REFRESH_TOKEN ='1//04ceXEq6azvGECgYIARAAGAQSNwF-L9Ir9HS2YOKvTo28BQ0lM2L-JJ5JUstJiXUtMPIYIOXDnvw4O3P_QkRe5gM863EKeZi5wlI'
const  SENDER_EMAIL_ADDRESS ='17110082@student.hcmute.edu.vn'
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'



const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SERECT,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

// send mail
const sendEmail = (to, url, txt) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SERECT,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    })

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "PT",
        html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the PT SHOP.</h2>
            <p>Congratulations! You're almost set to start using PT✮SHOP.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `
    }

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if (err) {
            console.log('Mail couldn\'t be sent because: ' + err);
          } else {
            console.log('Mail sent');
            return infor;
          }
    })
}

module.exports = sendEmail