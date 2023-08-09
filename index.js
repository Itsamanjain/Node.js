const http = require( 'http' );
const fs = require( 'fs' );

const myServer = http.createServer( (request, response) => {
    const log = `${Date.now()}: ${request.url} New Request Recived\n`;
    fs.appendFile('log.txt',log, (err,data) => {
        // switch(request.url){
        //     case "/":
        //         response.end("Homepage")
        //         break;
        //     case "/about":
        //         response.end("This is about page");
        //         break;

        //     default:
        //         response.end("404 not found");
        // }
        response.end("Hello from server");
    })
    // console.log("New Request Received");
    console.log(request);
    
}); 

myServer.listen(8000,() => console.log("server started  at port 8000! "));
