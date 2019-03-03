
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TopicSchema = new Schema({
  id: {
    type: String,
    required: 'Kindly enter the id of the topic'
  },
  name: {
    type: String,
    default: 'Kindly enter the name of the topic'
  },
  desc: {
    type: String,
    default: 'Kindly enter the name of the topic'
  }
});

module.exports = mongoose.model('Topic', TopicSchema);