
const User = require('./User.js');
const DB = require('./DB.js');

//statics
let DB_CONNECTION=null;

module.exports.handler = (event, context, callback) => {

    if (!DB_CONNECTION)
        DB_CONNECTION = new DB();

    callback(null, new User(DB_CONNECTION).handle(event, context, callback));
};