// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'production': {
        url: 'http://zhaoqi.tryingzone.com',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/zhaoqi_ghost.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },
};

// Export config
module.exports = config;
