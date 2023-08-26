console.log("Hello World")//1




const http = require("http")

http.createServer((req,res)=>{
    res.write( '<h1>Hello Node!!!!</h1>\n')
    res.end
}).listen(3000)//2





const fs = require('fs')

const fs = require('fs')
fs.readFile('./welcome.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
    })//3