var AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({region: 'us-east-2'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
  DelaySeconds: 10,
  MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "SendMsg Function"
    },
    "Author": {
      DataType: "String",
      StringValue: "KDev"
    }
  },
  MessageBody: "Envio de Mensaje desde Node.js",
  QueueUrl: process.env.QUEUEURL
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});