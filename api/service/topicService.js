var mongoose = require("mongoose");
var Topic = mongoose.model("Topic");
var rp = require("request-promise");

module.exports.getTopics = async function getTopics(req) {
  var topics = null;
  Topic.find({}, async function(err, task) {
    topics = task;
    if (err) {
      topics = err;
    }
  });
  return topics;
};

var options = {
  uri: "http://localhost:8080/topics",
  headers: {
    "User-Agent": "Request-Promise",
    Accepts: "application/json"
  },
  json: true // Automatically parses the JSON string in the response
};

module.exports.topics = async function callBootToGetTopics() {
  var topics = null;
  return rp(options)
    .then(function(data) {
      if (data) {
        topics = JSON.parse(JSON.stringify(data));
      }
      return topics;
    })
    .catch(function(err) {
      console.log("API call failed!!" +err);
    });
};
