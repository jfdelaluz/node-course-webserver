const http = require('http');

http.createServer( ( req, res ) => {

  res.write('larailaraila');
  res.end();

})
.listen( 8080 );


console.log( 'listening in port', 8080 );
