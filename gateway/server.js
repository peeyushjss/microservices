const gateway = require('fast-gateway');
const port = 3000;

const server = gateway({
    routes: [
        {
            prefix: '/user',
            target: 'http://localhost:3001/',
            hooks: {}
        },
        {
            prefix: '/order',
            target: 'http://localhost:3002/',
            hooks: {}
        }
    ]
});

server.get('/testing', (req, res) => {
    res.send('gateway called!!')
});

server.start(port).then(server => {
    console.log(`API Gateway is running on port: ${port}`)
});