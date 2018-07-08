require('module-alias/register');
const http = require('http'),
      sampleVueService = require('@sampleVueAPI'),
      sampleVueServiceServer = http.Server(sampleVueService),
      sampleVueServicePORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';
sampleVueServiceServer.listen(sampleVueServicePORT, LOCAL, () => console.log(`sampleVueService running on ${sampleVueServicePORT}`));