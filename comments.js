const express = require('express');

// Create web server
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the comments API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
