const express = require('express');
const path = require('path');

const app = express();
const PORT = 5991;

// Serve the index.html file
app.use(express.static(path.join(__dirname, '')));

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
