const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageModel = new Schema({
  content: { type: String },
  date: { type: Date },
  author: { type: String },
  textColor: { type: String },
  backgroundColor: { type: String }
});
module.exports = mongoose.model('message', messageModel);