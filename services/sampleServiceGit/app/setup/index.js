const mongoose = require('mongoose'),
      UserModel = require('@sampleVueModels/user');
const models = {
  User: mongoose.model('User')
}
module.exports = models;