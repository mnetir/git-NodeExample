const exprss = require('express');

const app = exprss();

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('Server Is Running on port' + 3000);
})