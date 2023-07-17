const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    creator: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    questions: [{
      title: String,
      answerOptions: [String],
      correctOptions: [Number],
    }],
  });

  const quizModel = mongoose.model('quiz',quizSchema)

  module.exports = {quizModel}