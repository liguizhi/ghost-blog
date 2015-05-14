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
            client: 'mysql',
            connection: {
                host     : 'localhost',
                user     : 'liguizhi',
                password : 'tryingzone',
                database : 'ghost_zhaoqi',
                charset  : 'utf8',
                _socket: '/var/run/mysqld/mysqld.sock',
            }
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
