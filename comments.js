//Create web server
const express = require('express');
const router = express.Router();
//Create connection to database
const db = require('../db');
//Get comments
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM comments';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
//Get single comment
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
//Create comment
router.post('/', (req, res) => {
    let newComment = {
        id: req.body.id,
