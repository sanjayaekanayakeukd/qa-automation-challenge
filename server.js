const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let items = [];
let currentId = 1;

// Simple login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    return res.status(200).json({ message: 'Login successful' });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/items', (req, res) => {
  const { name } = req.body;
  const newItem = { id: currentId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update an item
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find(i => i.id == id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  item.name = name;
  res.json(item);
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  items = items.filter(i => i.id != id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
