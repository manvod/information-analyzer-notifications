
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

//reusable transporter object using the SMTP transport
//using google as an example:
//TODO: Please replace sender@googlemail.com with the sender email address
//TODO: Please replace senderpassword with the password of the sender account
//TODO: NOTE: If you want to run this with a google account, please log in Google via 
//            your web browser first and temporarily disable CAPTCHA for the next login attempt 
//			  by running these URLs:
//            https://www.google.com/settings/security/lesssecureapps (select activate)
//            https://accounts.google.com/DisplayUnlockCaptcha			  
var transporter = nodemailer.createTransport('smtps://sender@googlemail.com:senderpassword@smtp.gmail.com'); 

function sendAnalysisFinishedMail(messageJson) {
  console.log('sending data analysis finshed mail');
 
  var mailOptions = {
    to: 'receiver@yourdomain.com', // TODO: specify the receiver email addresses
    subject: 'Data analysis finished', // Subject line
    text: 'use the contained link to get more details', // plaintext body
    html: '<hr>Your data analysis has finished.<hr>Please click here to get more details: <a href="https://mdmdemowin:9443/ibm/iis/dq/da/index.html#/datasetAnalysis?id=' 
	       + messageJson.projectRid + '&tamRID=' + messageJson.tamRid + '">open data set</a><hr>' // html body
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
})};