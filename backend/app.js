// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routers/user_route');
const postRoutes = require('./routers/post_route');

// database connection
const db = require('./config/db.config.js');
const { Server } = require('http');
db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})

const app = express();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
// bodyParser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('append,delete,entries,foreach,get,has,keys,set,values,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// images
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;