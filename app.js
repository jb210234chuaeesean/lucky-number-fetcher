const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;

app.use(cors());
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
