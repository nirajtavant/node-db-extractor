# Node Lambda App V1

Lambda function for data comparison in old/new databases.

## Table of Contents
- [Introduction](#introduction)
- [Setup and Run Instructions](#setup-and-run-instructions)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Security](#security)
- [Performance Optimization](#performance-optimization)

## Introduction
This Lambda function compares data between two databases to identify missing, corrupted, and new records. It is designed to be deployed on AWS Lambda and can be triggered by various events, such as scheduled events, API calls, or file uploads.

## Setup and Run Instructions
### Local Development
1. Clone the repository from GitHub:
[https://github.com/nirajtavant/node-lambda-app.git](https://github.com/nirajtavant/node-lambda-app-v1)

2. Navigate to the project directory:
`cd node-lambda-app-v1`

3. Install dependencies:
`npm install`

4. Set up environment variables: Create a `.env` file and add your AWS credentials and database connection details.
5. Run tests:
`npm test`

Start the Lambda function locally:
`npm start`
Above command will call the index.js for now, which is calling lambda handler directly, you can deploy it on your AWS Lambda setup.

### Deployment to AWS
1. Follow the AWS Lambda deployment guide to deploy the function to your AWS account.
2. Configure the necessary permissions and roles for the Lambda function to access other AWS services.
3. Update environment variables and settings as required for the AWS environment.

## Assumptions and Design Decisions
### Assumptions
1. We assume that the input data provided to the Lambda function follows a specific format, with fields such as `id`, `name`, and `age`.
2. We assume a PostgreSQL database is used for storing and retrieving data, and the schema matches the structure of the input data.

### Design Decisions
1. We chose to implement a simple data comparison algorithm to identify missing, corrupted, and new data records.

## Error Handling
### Error Handling Mechanisms
1. Implemented try-catch blocks to handle exceptions and errors gracefully.
2. Used descriptive error messages to assist in debugging and troubleshooting.

## Logging
### Logging Strategy
1. Recorded errors, warnings, and other relevant events to aid in monitoring and debugging.

## Security
### Security Measures
1. Ensured that sensitive information such as AWS credentials are stored securely and not exposed in version control or logs.

## Performance Optimization
### Performance Considerations
1. Optimized database queries and data processing algorithms for efficiency and scalability.

## Database operations only for developments, For docker containers.
Note: we have some existing data in both the tables.

### Open PG query console to run queries, you can use PG Admin of any other tool.
- `docker run -p 5432:5432 guaranteedrate/homework-pre-migration:1607545060-a7085621`
- `psql -U old -d old`

### Open PG query console to run queries, you can use PG Admin of any other tool.
- `docker run -p 5433:5432 guaranteedrate/homework-post-migration:1607545060-a7085621`
- `psql -U new -d new`

### Fetch all the table names of database
- `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'; `
