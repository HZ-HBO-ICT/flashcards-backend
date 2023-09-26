import express from 'express';
import cors from 'cors';
import {
  getIndex,
  getAllSubjects,
  getASubject,
  getAllTopicsOfASubject,
  getATopicOfASubject,
  getAllQuestionsPerTopic,
  createAQuestionForATopic,
  getAQuestionForAtopic,
  getOptionsForSubjects,
} from '../controllers/questionsController.js';
const router = express.Router();

// get a collection of all the appointments and ou can use a query
router.get('/', cors(), getIndex);
router.get('/subjects', cors(), getAllSubjects);
router.options('/subjects', cors(), getOptionsForSubjects);
router.get('/subjects/:subject', cors(), getASubject);
router.get('/subjects/:subject/topics', cors(), getAllTopicsOfASubject);
router.get('/subjects/:subject/topics/:topic', cors(), getATopicOfASubject);
router.get(
  '/subjects/:subject/topics/:topic/questions',
  cors(),
  getAllQuestionsPerTopic
);
router.post(
  '/subjects/:subject/topics/:topic/questions',
  cors(),
  createAQuestionForATopic
);
router.get(
  '/subjects/:subject/topics/:topic/questions/:question',
  cors(),
  getAQuestionForAtopic
);

/**
 * I do not like this questions setup. It is a bit to hierarchical
 */

export default router;
