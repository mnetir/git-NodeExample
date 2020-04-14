const exprss = require('express');

const app = exprss();
var port = 5000;
app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Server Is Running on port ${port}`);
})