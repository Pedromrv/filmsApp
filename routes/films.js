const express = require('express');
const router = express.Router();

const films = require('../controllers/films')




router.get("/film/:title",films.getTitle);






module.exports = router;