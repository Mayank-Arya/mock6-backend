const express = require('express');
const { quizModel } = require('../models/quiz');
const quizRouter = express.Router()

quizRouter.post('/addQuiz', async (req, res) => {
    try {
      const quizData = req.body;
      const quiz = await quizModel.create(quizData);
      res.status(201).json(quiz);
    } catch (error) {
      console.error('Error creating quiz:', error);
      res.status(500).json({ error: 'Failed to create quiz' });
    }
  });
  
  quizRouter.get('/quizzes', async (req, res) => {
    try {
      const quizzes = await quizModel.find();
      res.json(quizzes);
    } catch (error) {
      console.error('Error getting quizzes:', error);
      res.status(500).json({ error: 'Failed to get quizzes' });
    }
  });
  
  quizRouter.get('/quizzes/:quizId', async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await quizModel.findById(quizId);
      if (!quiz) {
        res.status(404).json({ error: 'Quiz not found' });
      } else {
        res.json(quiz);
      }
    } catch (error) {
      console.error('Error getting quiz:', error);
      res.status(500).json({ error: 'Failed to get quiz' });
    }
  });
  
  quizRouter.put('/quizzes/:quizId', async (req, res) => {
    try {
      const { quizId } = req.params;
      const quizData = req.body;
      const quiz = await quizModel.findByIdAndUpdate(quizId, quizData, { new: true });
      if (!quiz) {
        res.status(404).json({ error: 'Quiz not found' });
      } else {
        res.json(quiz);
      }
    } catch (error) {
      console.error('Error updating quiz:', error);
      res.status(500).json({ error: 'Failed to update quiz' });
    }
  });
  
  quizRouter.delete('/quizzes/:quizId', async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await quizModel.findByIdAndDelete(quizId);
      if (!quiz) {
        res.status(404).json({ error: 'Quiz not found' });
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      console.error('Error deleting quiz:', error);
      res.status(500).json({ error: 'Failed to delete quiz' });
    }
  });


  module.exports = {quizRouter}