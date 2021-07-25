const http = require('http');
const port = 8000
const url = require('url')


const requestHandler = http.createServer();
requestHandler.on('request', (request, response) => {

    const query = url.parse(request.url, true).query;
    
    response.writeHead(200);
    console.log(request.url );

    if(query.name === undefined){
        response.end('Please provide name and city parameters')

    } else {
        response.end('Hello ' + query.name + ' from ' + query.city) ;

        console.log('Parsed query string:');
        console.log(query);
    }
});



requestHandler.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });


const urlNoQuery = '/about';
const parsedUrlNoQuery = url.parse(urlNoQuery, true);
console.log(parsedUrlNoQuery.query);