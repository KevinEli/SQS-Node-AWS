var AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({region: 'us-east-2'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

let readQueueDetails = () => {

    var params = {

        MaxNumberOfMessages: 10,
        QueueUrl: process.env.QUEUEURL
    };
    
    
    sqs.receiveMessage(params, (err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log(data)
        if(data.Messages) {
            data.Messages.forEach(msg => console.log(msg));
          }

      }
      
      
    });

}

readQueueDetails();
