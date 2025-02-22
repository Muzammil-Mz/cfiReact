
import sendEmail from "./sendEmail.js";

let emailData={
  
    to:"",
    subject:"test from mz",
    html:`<h1> THis is a test mail from mzzzzzzzzzzzzzzzzzzzz  </h1>`,
    text:"that okay"
};

sendEmail(emailData)