const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({home: 'Hello GET!'});
});

router.post('/', function (req, res, next) {
    res.json({home: 'Hello POST!'});
});

router.put('/', function (req, res, next) {
    res.json({home: 'Hello PUT!'});
});

router.delete('/', function (req, res, next) {
    res.json({home: 'Hello DELETE!'});
});

module.exports = router;