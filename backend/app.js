const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const { email, password, username } = req.body;
    const query = 'INSERT INTO users (email, password, username) VALUES (?, ?, ?)';
    db.query(query, [email, password, username], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
    });
});

// Daily Counters
app.get('/daily_counters/:userId', (req, res) => {
    const { userId } = req.params;
    const query = 'SELECT * FROM daily_counters WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/daily_counters', (req, res) => {
    const { userId, date, count } = req.body;
    const query = 'INSERT INTO daily_counters (user_id, date, count) VALUES (?, ?, ?)';
    db.query(query, [userId, date, count], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
    });
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});












