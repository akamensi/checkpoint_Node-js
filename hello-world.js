console.log("HELLO WORLD")


const http = require('http')


http.createServer((req,res)=>{
    res.write("hello node!!!")
    res.end()
}).listen(3000)