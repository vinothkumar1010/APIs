/*module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, {
      promiseLibrary: global.Promise,
       useNewUrlParser: true 
    });
    database.on('error', error => console.log(`Connection to sample vue service database failed: ${error}`));
    database.on('connected', () => console.log('Connected to sample Vue Service database'));
    database.on('disconnected', () => console.log('Disconnected from sample Vue Service database'));
    process.on('SIGINT', () => {
      database.close(() => {
        console.log('sampleVueService terminated, connection closed');
        process.exit(0);
      })
    });
  };*/

  module.exports = (mongoose, config) => {
    if(config.database.indexOf('replicaSet') > - 1) {
      dbOptions = {
        db: {native_parser: true},
        replset: {
          auto_reconnect:false,
          poolSize: 10,
          socketOptions: {
            keepAlive: 1000,
            connectTimeoutMS: 30000
          }
        },
        server: {
          poolSize: 5,
          socketOptions: {
            keepAlive: 1000,
            connectTimeoutMS: 30000
          }
        }
      };
    }
    
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, dbOptions);
    database.on('error', error => console.log(`Connection to sample vue service database failed: ${error}`));
    database.on('connected', () => console.log('Connected to sample Vue Service database'));
    database.on('disconnected', () => console.log('Disconnected from sample Vue Service database'));
    process.on('SIGINT', () => {
      database.close(() => {
        console.log('sampleVueService terminated, connection closed');
        process.exit(0);
      })
    });
  };
  
 