const express = require('express');
const router = express.Router();
const db = require('../db');

// Get banner details
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM banners LIMIT 1';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    });
});

// Update banner details
router.post('/update', (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    let sql = 'UPDATE banners SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1';
    db.query(sql, [description, timer, link, isVisible], (err, result) => {
        if (err) throw err;
        res.send('Banner updated successfully');
    });
 });

module.exports = router;
