const exprss = require('express');

const app = exprss();
var port = 3000;
app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Server Is Running on port ${port}`);
})