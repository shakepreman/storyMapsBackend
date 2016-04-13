'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocationSchema = new Schema({
  name: String,
  subTitle: String,
  description: String,
  url: String,
  urlType: String,
  latitude: Number,
  longitude: Number,
  nextLocationId: String
});

module.exports = mongoose.model('Location', LocationSchema);
