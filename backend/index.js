const express = require("express");
const bodyParser = require('body-parser')
const cors=require('cors')
const productRouters=require('./Routes/products.js')
const orderRouters=require('./Routes/orders.js')

const app = express();
const Port = 5000;

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.use('/products',productRouters)
app.use('/order',orderRouters)



app.listen(Port, () => console.log("port 5000"));
