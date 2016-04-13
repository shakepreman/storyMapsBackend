'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoriesSchema = new Schema({
  name: String,
  thumbnailUrl: String,
  description: String,
  mapUrl: String,
  locations:[String],
  difficulty: String,
  nextLocationId: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model('Stories', StoriesSchema);
