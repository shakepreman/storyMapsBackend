'use strict';

var _ = require('lodash');
var Stories = require('./stories.model');

// Get list of storiess
exports.index = function(req, res) {
  Stories.find(function (err, storiess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(storiess);
  });
};

// Get a single stories
exports.show = function(req, res) {
  Stories.findById(req.params.id, function (err, stories) {
    if(err) { return handleError(res, err); }
    if(!stories) { return res.status(404).send('Not Found'); }
    return res.json(stories);
  });
};

// Creates a new stories in the DB.
exports.create = function(req, res) {
  Stories.create(req.body, function(err, stories) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(stories);
  });
};

exports.updateArray = function(req, res) {
  Stories.findById(req.params.id, function (err, stories) {
    if (err) { return handleError(res, err); }
    if(!stories) { return res.status(404).send('Not Found'); }
    stories.locations.push(req.body.data);
    stories.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(stories);
    });
  });
}

// Updates an existing stories in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Stories.findById(req.params.id, function (err, stories) {
    if (err) { return handleError(res, err); }
    if(!stories) { return res.status(404).send('Not Found'); }
    var updated = _.merge(stories, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(stories);
    });
  });
};

// Deletes a stories from the DB.
exports.destroy = function(req, res) {
  Stories.findById(req.params.id, function (err, stories) {
    if(err) { return handleError(res, err); }
    if(!stories) { return res.status(404).send('Not Found'); }
    stories.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
