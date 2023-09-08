const express = require('express');

console.log(__dirname);
console.log(__filename)
// store  express 
const app = express();

app.get('', (req, res) => {
    res.send('Hello Express')
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});