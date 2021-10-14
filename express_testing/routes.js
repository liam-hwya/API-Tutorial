const express = require('express');
const router = express.Router();

router.get('/people',function(req,res){
    const people = [
        {name: "John", age: 20},
        {name: "Doe", age: 30},
    ];

    return res.status(200).json(people);
});

router.get('/people/:id',function(req,res){
    const id = req.params.id;

    return res.status(200).json({id});
});

module.exports = router;