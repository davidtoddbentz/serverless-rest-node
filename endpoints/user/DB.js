const BaseDB = require('../BaseDB.js');
const dynamodb = require('./dynamodb');

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

class DB extends BaseDB{

    constructor(){
        super();
        logger.info("Init db");
    }

    create(obj){
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: obj,
        };

        dynamodb.put(params, (error) => {
            if (error) {
                throw error;
            }
        });

    }

    read(id){
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Key: {
                id: id,
            },
        };

        // fetch todo from the database
        dynamodb.get(params, (error, result) => {
            // handle potential errors
            if (error) {
                throw error;
            }
            return result.Item;
        });
    }

    update(id, obj){
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Key: {
                id: id,
            }
        };

        dynamodb.update(params, (error, result) => {
            if (error) {
                throw error;
            }
        });
    }

    delete(id){
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Key: {
                id: id,
            },
        };

        dynamodb.delete(params, (error) => {
            if (error) {
                throw error;
            }
        });
    }

}

module.exports = DB;