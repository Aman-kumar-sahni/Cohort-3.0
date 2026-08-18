let http = require("http")

let server = http.createServer((req,res)=>{
    console.log("hello i m server")
    res.write("writ kor33 3")
    res.end()
})


server.listen (3000,()=>{
    console.log("server is running on port 8000")

})
