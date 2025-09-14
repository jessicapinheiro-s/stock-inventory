const express = require("express");

const router = express.Router();

const {
    getPoducts,
    createPoducts,
    deletePoducts,
    updatePoducts
} = require('../controllers/inventory.js/app.controller');

router.get('/', getPoducts);
router.post('/', createPoducts);
router.delete('/:id', deletePoducts);
router.patch('/:id', updatePoducts);


module.exports = router;