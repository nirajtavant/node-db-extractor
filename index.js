const { handler } = require('./src/lambda_handlers/generateReportHandler');
// Lambda handler function
handler().then(response => console.log(response)).catch(error => console.error(error));