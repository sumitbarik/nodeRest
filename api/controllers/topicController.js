"use strict";

var topicService = require("../service/topicService");
var mongoose = require("mongoose");
var Topic = mongoose.model("Topic");

// exports.list_all_topics = async function(req, res){
//   var topics = await topicService.getTopics(req);
//   res.send(topics);
// }
exports.list_all_topics = function(req, res) {
  Topic.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_topic = function(req, res) {
  var new_topic = new Topic(req.body);
  new_topic.save(function(err, topic) {
    if (err) res.send(err);
    res.json(topic);
  });
};

exports.read_a_topic = function(req, res) {
  Topic.findById(req.params.topicId, function(err, topic) {
    if (err) res.send(err);
    res.json(topic);
  });
};

exports.update_a_topic = function(req, res) {
  Topic.findOneAndUpdate(
    { _id: req.params.topicId },
    req.body,
    { new: true },
    function(err, topic) {
      if (err) res.send(err);
      res.json(topic);
    }
  );
};

exports.delete_a_topic = function(req, res) {
  Topic.remove(
    {
      _id: req.params.topicId
    },
    function(err, topic) {
      if (err) res.send(err);
      res.json({ message: "Topic successfully deleted" });
    }
  );
};

exports.getTopicsFromBoot = async function(req, res) {
  const topic = await topicService.topics();
  res.json(topic);
  // res.json({ message: 'Topic successfully deleted' });
};
