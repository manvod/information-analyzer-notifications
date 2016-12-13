
// Event Listener

//create a Kafka message consumer
var kafka = require('kafka-node'),
    HighLevelConsumer = kafka.HighLevelConsumer,
    client = new kafka.Client('localhost:52181'), // TODO replace localhost with your Information Server host name
    consumer = new HighLevelConsumer(
        client,
        [
            { topic: 'InfosphereEvents' }
        ],
        {
            groupId: 'my-group'
        }
    );

//this function is called for every event
consumer.on('message', function (message) {
    console.log('message received');  
	var messageJson = JSON.parse(message.value.toString());
	console.log(messageJson);
	
	//Subscriptions
	if(messageJson.eventType === 'IA_DATAQUALITY_ANALYSIS_FINISHED_EVENT') {
		sendAnalysisFinishedMail(messageJson);
	} 
});

consumer.on('error', function (err) {
  console.log('error received');
  console.log(err);
});

// Node Mailer
 
var nodemailer = require('nodemailer');
//nodemailer-wellknown returnes the SMPT configuration for about 35 popular services
//reusable transporter object using the SMTP transport
//using google as an example:
//TODO: Please replace sender@googlemail.com with the sender email address
//TODO: Please replace senderpassword with the password of the sender account
//TODO: NOTE: If you want to run this with a google account, please see details :
//            https://nodemailer.com/using-gmail/
//            log in Google via your web browser first and temporarily disable CAPTCHA for the next login attempt 
//			  by running these URLs:
//            https://www.google.com/settings/security/lesssecureapps (select activate)
//            https://accounts.google.com/DisplayUnlockCaptcha	
	
var wellknown = require('nodemailer-wellknown');
var transporter = nodemailer.createTransport({service : 'Gmail', 
auth: { user: 'sender@googlemail.com', pass: 'senderpassword' }} );	  

function sendAnalysisFinishedMail(messageJson) {
  console.log('sending data analysis finshed mail');
 
  var mailOptions = {
    to: 'receiver@yourdomain.com', // TODO: specify the receiver email addresses
    subject: 'Data analysis finished', // Subject line
    text: 'use the contained link to get more details', // plaintext body
	// TODO (next line) : replace localhost with your Information Server host name and specify report port (default 9443)
    html: '<hr>Your data analysis has finished.<hr>Please click here to get more details: <a href="https://localhost:yourport/ibm/iis/dq/da/index.html#/datasetAnalysis?id=' 
	       + messageJson + '&tamRID=' + messageJson + '">open data set</a><hr>' // html body
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
})};