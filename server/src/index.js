const express = require('express');
const mongoose = require('mongoose');
const keys = require('../config/keys');
// this require is always before the services/passport
// MongooseError: Schema hasn't been registered for model "users"
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
