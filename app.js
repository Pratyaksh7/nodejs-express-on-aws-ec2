const express = require("express");
const app = express();

const port = 3000

app.get('/', (req, res)  => {
    res.send('<h1>Express demo app.</h1> <h4>Message: Success</h4> <p>Version 1.0</p>')
})

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '1012',
            price: 101
        },
        {
            productId: '103',
            price: 102
        },
        {
            productId: '104',
            price: 103
        },
        {
            productId: '105',
            price: 104
        }
    ])
})

app.listen(port, () => {
    console.log(`Demo app is up and listening to port: ${port}`)
})