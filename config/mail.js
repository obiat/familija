// Copy in your particulars and rename this to mail.js
module.exports = {
  service: "tlen",
  host: "smtp.tlen.pl",
  port: 587,
  secureConnection: false,
  //name: "servername",
  auth: {
    user: "myusername",
    pass: "mypassword"
  },
  ignoreTLS: false,
  debug: false,
  maxConnections: 5 // Default is 5
}
