const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors({origin: '*'}));
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/query/:id', (req, res) => {
    axios.get(`https://www.4dmoon.com/zh-cn/4d-history/${req.params.id}`)
        .then(response => {
        res.send(response.data);
        })
        .catch(error => {
        console.log(error);
        });
})

app.listen(5000, () => {
    
});
