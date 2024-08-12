const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const bannerRoutes = require('./routes/banner');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/banner', bannerRoutes);

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
