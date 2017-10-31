const BaseDB = require('../BaseDB.js');
const AWS = require('aws-sdk');

let dynamodb = new AWS.DynamoDB.DocumentClient({});

let log4js = require('log4js');
let logger = log4js.getLogger('DynamoDB');
logger.level = 'debug';

class DB extends BaseDB{

    constructor(){
        super();
        logger.info("Init db");
    }

    create(obj, callback){
        logger.debug("Creating " + obj);
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: obj,
        };

        dynamodb.put(params, (error) => {
            if (error) {
                throw error;
            }
            logger.debug("Done " + obj);
            callback(null);
        });
    }

    read(id, callback){

        logger.debug("Reading " + String(id));
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Key: {
                id: id,
            },
        };

        dynamodb.get(params, (error, result) => {

            if (error) {
                throw error;
            }
            logger.debug("Done : " + JSON.stringify(result));
            callback(null, result.Item);
        });
    }

    update(id, obj, callback){
        logger.debug("Update");
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
            logger.debug("Done : " + JSON.stringify(result));
            callback(error, result);
        });
    }

    delete(id, callback){
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
            callback(null);
        });
    }

}

module.exports = DB;