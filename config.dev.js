// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        url: 'http://localhost:2368',
        database: {
            client: 'mysql',
            connection: {
                host     : 'localhost',
                user     : 'root',
                password : '',
                database : 'ghost_zhaoqi',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
    },
};

// Export config
module.exports = config;
