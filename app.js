// const http = require("http")

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write("Home Page");
//     }
//     else if (req.url === "/about") {
//         res.write("about Page");
//     }
//     else if (req.url === "/section") {
//         res.write("section Page");
//     }
//     else{
//         res.write("404 Not fount")
//     }
//     res.end();
// })
// server.listen(3000, () => {
//     console.log("Server is running on Port  3000");
// })

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if (req.url.startsWith("/user/")){
//         const id = req.url.split("/")[2];
//         res.write("user id is : " +id)
//     }
//     else{
//         res.write("Page not found")
//     }
//     res.end()
// })
// server.listen(3000, ()=>{
//     console.log('Server running on port 3000');    
// })


// const arr = [10, 20 , 30]
// const [a,b,c,] = arr

// console.log(a);
// console.log(b);
// console.log(c);


// let a  = (process.argv[2])
// let b  = (process.argv[3])
// console.log( a+b);



// const http = require('http')
// // const demo = require('./demo')

// const server = http.createServer(( req, res)=>{
//     res.write('server page')
//     // console.log(demo);

//     res.end()
// })
// server.listen(3000 , ()=>{
//     console.log('server ia liaten port numbre , 3000');    
// })


// const fs = require('fs')
// const path = require('path')

// const filename = path.join(__dirname ,'crud','file1.text')
// fs.writeFileSync(filename, 'create first file and ,')  // create
// fs.appendFileSync(filename , ' append text')    // add
// fs.renameSync(filename, 'file2.text')   // update
// fs.unlinkSync(filename) //delete


// dynamic Port & setHeaders

// const http = require('http')

// const port = process.argv[2]
// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<h1>Create dynamic Port</h1>');
//     res.end()
// })

// server.listen(port,()=>{
//     console.log(`server is listen port ${port}`);    
// })

//simple apis

// const http = require('http')

// const details = [
//     {
//         name : 'annu',
//         age : 12,
//     },
//     {
//         name : 'aditya',
//         age : 10,
//     },
//     {
//         name : 'jaimy',
//         age : 8,
//     },
//     {
//         name : 'ninja',
//         age : 6,
//     },
// ]

// const server = http.createServer((req, res)=>{
//    res.setHeader('Content-Type','application/json')
//     res.write(JSON.stringify(details))
//     res.end()
// })
// server.listen(1000,()=>{
//     console.log(`server is listen port 1000`);    
// })


// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     fs.readFile('index.html' , (err , data)=>{
//         if(err){
//             res.writeHead(500, {'content-type' : 'text/html'})
//             res.end('server error')
//         }else{
//             res.writeHead(200, {'content-type' : 'text/html'})
//             res.end(data)
//         }
//     })

// })
// server.listen(4200,()=>{
//     console.log(`server is listen port 4200`);
// })


// const http = require('http')
// const fs = require('fs')
// const path = require('path') 

// const server = http.createServer((req, res) => {
//     const filePath = path.join(__dirname,'index.html')

//     fs.readFile(filePath, (err , data)=>{
//         if(err){
//             res.writeHead(500 , {'Content-type' : 'text/html'});
//             res.end('server error')
//         }
//         else if(req.url === '/submit'){
//             res.write('Data was submit')
//             res.end()
//         }
//         else{
//             res.writeHead(200 , {'Content-type' : 'text/html'});
//             res.end(data)
//         }
//     })
// })
// server.listen(3000, () => {
//     console.log(`server is listen port 3000`);
// })

// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// const querystring = require('querystring')

// const server = http.createServer((req, res) => {
//     const filePath = path.join(__dirname, 'index.html')
//     fs.readFile(filePath, (err, data) => {

//         if (req.url === '/submit' && (req.method === 'POST')) {

//             let body = ''
//             req.on('data', (chunk) => {
//                 body += chunk
//             })
//             req.on('end', () => {
//                 const data = querystring.parse(body)
//                 console.log(data);
//                 res.write('<h1> Form Submited </h1>')
//                 res.write(`<h2> username : ${data.name} </h2>`)
//                 res.write(`<h2> userAge : ${data.age} </h2>`)
//                 res.end()
//             })
//         }
//         else if (err) {
//             res.writeHead(500, { 'content-type': 'text/html' })
//             res.end('server error')
//         }
//         else {
//             res.writeHead(200, { 'content-type': 'text/html' })
//             res.write(data)
//             res.end()
//         }
//     })
// })
// server.listen(3200, () => {
//     console.log('server is running port 3200');
// })


// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// const querystring = require('querystring')

// const server = http.createServer(( req, res)=>{
//     const filePath = path.join(__dirname , "index.html")
//     fs.readFile(filePath , (err , data)=>{
//         if(req.url === '/submit' && req.method === 'POST'){
//             let body = ""
//             req.on('data', (chunk)=>{
//                 body +=chunk
//             })
//             req.on('end' , ()=>{
//                 const data = querystring.parse(body)
//                 console.log(data);
//                 res.write("<h1> form Submit </h1>")    
//                 res.write(`<h2>Name : ${data.name}</h2>`)            
//                 res.write(`<h2>Age : ${data.age}</h2>`) 
//                 res.write(`<h2>Address : ${data.address}</h2>`) 
//                 res.end()
//             })
//         }
//         else if(err){
//             res.writeHead(500 , {'content-type' : 'text/html'})
//             res.end('server error !')
//         }
//         else{
//             res.writeHead(200 , {'content-type' : 'text/html'})
//             res.end(data) 
//         }
//     })
// })
// server.listen(1000 ,()=>{
//     console.log('server is listen on port 1000');    
// })

// const os = require('os')
// console.log(os.hostname());

// const EventEmitter = require('events')
// const event = new EventEmitter()

// event.on('greet',(username)=>{
//     console.log(username);
// })

// event.emit('greet','Ranjeet Chauhan' )


// const EventEmitter = require('events')
// const event = new EventEmitter()

// event.on('user',()=>{
//     console.log('hello world !');
// })

// event.emit('user')

// .....................................add two Numbers.................................

// const EventEmitter = require('events')
// const event = new EventEmitter()

// event.on('sum',(a,b)=>{
//     console.log(a+b);    
// })
// event.emit('sum', 3,4)

// .....................................add check login.................................

// const EventEmitter = require('events')
// const event = new EventEmitter()

// event.on('student',(user)=>{
//     if(user === "login"){
//         console.log('login success');        
//     }else{
//         console.log('login Faild');
//     }
// })
// event.emit('student' ,'login')

// .....................................check number even or odd.................................

// const EventEmitter = require('events')
// const event = new EventEmitter()

// event.on('handlecheck',(num)=>{
//     if(num%2== 0){
//         console.log('Event Number',num);        
//     }else{
//          console.log('odd Number',num);
//     }
// })
// event.emit('handlecheck', 4)

// .....................................check number even or odd.................................

// const EventEmitter= require('events')
// const event = new EventEmitter()

// event.on('greet',()=>{
//     console.log('listner 1');
// })
// event.on('greet',()=>{
//     console.log('listner 2');
// })
// event.emit('greet')

// .....................................print currant year.................................

// const EventEmitter= require('events')
// const event = new EventEmitter()

// event.on('year',()=>{
//     const currantYear = new Date()
//     console.log(currantYear.getFullYear());
// })

// event.emit('year')