const { response } = require('express');
const express = require('express');
const app = express(); //Create app object

/**
 * (1)   Use app's method get()
 * (2)   Arrange a JSON data array
 * (3)   Use app's method json()
 *          json() makes Content-Type: application/json at response header
 * (4)   Use app's method listen() 
 */

// app.get('/api/people',function(req,res){
//     const data = [
//         { name: "John", age: 22},
//         { name: "Doe", age: 23},
//     ];

//     return res.status(200).json(data);
// })

app.get('/api/people/:id',function(req,res){
    const id = req.params.id;

    return res.status(200).json({id});
})

app.listen(8000, function(){ //Use app's method listen()
    console.log("Server running at port 8000...");
})