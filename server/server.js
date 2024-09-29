const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const BusinessList = require('./routes/BusinessList');
const PORT = process.env.PORT || 5000;
const { init } = require('./models/init'); 

init();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes); 

app.use('/api', BusinessList);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
