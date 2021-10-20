const express = require('express');
const UserController = require('../controllers/UserController');
const AnimalController = require('../controllers/AnimalController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/users', authMiddleware, UserController.index);
router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
router.post('/users/login', UserController.login);

router.use(authMiddleware);

router.get('/users/:user_id/animal', AnimalController.index);
router.get('/users/:user_id/animal/:id', AnimalController.getOne);
router.post('/users/:user_id/animal', AnimalController.store);
router.delete('/users/:id/animal', AnimalController.delete);
router.put('/users/:id/animal', AnimalController.update);

module.exports = router;