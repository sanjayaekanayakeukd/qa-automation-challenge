const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Only listen if this file is run directly, not during tests
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}

module.exports = app;
