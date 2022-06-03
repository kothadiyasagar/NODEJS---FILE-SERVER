

const http = require('http') 
const fs = require('fs');

const server = http.createServer((req,res)=>{
     res.setHeader("content-type","text/HTML")
 
    if(req.url==="/"){
        
     fs.readFile('./public.txt',"utf-8",(err,data)=>{
        //  res.setHeader("content-type","text/HTML")
            res.write(data)
            
     })
    
    fs.readFile('./src.txt',"utf-8",(err,data)=>{
        // res.setHeader("content-type","text/HTML")
          res.write(data)
        
     })
     fs.readFile('./data.txt',"utf-8",(err,data)=>{
        // res.setHeader("content-type","text/HTML")
        res.write(data)
        res.end()
     })
    }
    // const textred1 = fs.readFileSync("./src.txt","utf-8")
    // console.log(textred1)
    // const textred2 = fs.readFileSync("./public.txt","utf-8")
     if(req.url==="/public"){ 
        fs.readFile('./public.txt',"utf-8",(err,data)=>{
            //  res.setHeader("content-type","text/HTML")
                   res.write(data)
                   res.end()
                    
      })
    }
    if(req.url==="/public/other"){ 
        fs.readFile('./other.txt',"utf-8",(err,data)=>{
            //  res.setHeader("content-type","text/HTML")
                   res.write(data)
                   res.end()
                    
      })
    }
    
    
   
    // }
    
    
}) 

server.listen(3030,()=>{
    console.log("port http://localhost:3030/")
})