'use strict';

const Hapi = require('hapi');



// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8000 
    
});
 
// Add the Home route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, h) {
            return '<h1>Hello World</h1>';
    }
});

// Add a little dynamic route to test things out
server.route({
    method: 'GET',
    path:'/user/{name}', 
    handler: function (request, h) {

        return(`Hello, `+request.params.name);
    }
});


// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();