const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('TimeNest API is Running');
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
