const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

module.exports = () => open(
{
    filename: './src/db/rocketq.sqlite',
    driver: sqlite3.Database
});
