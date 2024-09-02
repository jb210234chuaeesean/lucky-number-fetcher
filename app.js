const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));
app.disable('x-powered-by');

app.get('/query/:id', (req, res) => {
    axios.get(`https://www.4dmoon.com/zh-cn/4d-history/${req.params.id}`).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        res.send(error);
    })
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
