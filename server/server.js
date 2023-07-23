// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001;

// Serve the static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')));

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
