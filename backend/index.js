const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    return res.json('okkkkkkk');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});