Serverless Rest API Node

**NON FUNCTIONING WORK IN PROGRESS**

Serverless framework in node that will:
* Deploy/Destroy entire stack on command
* Integrated with CircleCI for unit and integration tests and coverage on all branches
* Automate SDK generation for endpoints through APIGateway using json schema models created from classes
* OAuth managed endpoints

Stack:
* Serverless framework for AWS management
* TypeScript models for json schema generation and type enforcing in and out
* CircleCI for CI (.circleci/config.yml)
* mocha, chai for testing
* bluebird for promises
* ES6 throughout


Framework features dependency injectable classes that are called by endpoints, also used in unit tests



