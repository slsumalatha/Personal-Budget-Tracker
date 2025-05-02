const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock database
let transactions = [];

// Get all transactions
app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

// Add a new transaction
app.post('/api/transactions', (req, res) => {
    const transaction = req.body;
    transactions.push(transaction);
    res.json({ message: 'Transaction added successfully!' });
});

// Set a budget
let budget = 0;
app.post('/api/setBudget', (req, res) => {
    budget = req.body.budget;
    res.json({ message: 'Budget set successfully!' });
});

// Get budget
app.get('/api/getBudget', (req, res) => {
    res.json({ budget });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
