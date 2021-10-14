const fs = require("fs");

console.log("some process");

fs.readFile('data.txt','utf-8',function(err,data){
    console.log(data);
});

console.log("some more process");