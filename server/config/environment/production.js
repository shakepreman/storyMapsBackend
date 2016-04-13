'use strict';

// Production specific configuration
// =================================
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
module.exports = {
  // Server IP
  ip:       appEnv.bind ||
            process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     appEnv.port ||
             process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/client'
  }
};
