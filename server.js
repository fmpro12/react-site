const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// Load the SSL certificate and private key
const options = {
  key: fs.readFileSync(path.join(__dirname, 'your-private-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'your-certificate.pem'))
};

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Send the React app HTML on any incoming request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Create the HTTPS server
const port = 443; // Port for HTTPS

https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});
