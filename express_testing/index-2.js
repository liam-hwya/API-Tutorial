const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api',routes);

app.listen(8000,function(){
    console.log("API Server running at port 8000....");
});