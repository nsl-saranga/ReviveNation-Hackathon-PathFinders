const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const ndxRoutes = require('./routes/ndx');
const payDpiRoutes = require('./routes/paydpi');
const sludiMosipRoutes = require('./routes/sludi-mosip');

require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/ndx', ndxRoutes);
app.use('/paydpi', payDpiRoutes);
app.use('/', sludiMosipRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
