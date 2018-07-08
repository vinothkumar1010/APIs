module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, {
      promiseLibrary: global.Promise,
       useNewUrlParser: true 
    });
    database.on('error', error => console.log(`Connection to sampleVueService database failed: ${error}`));
    database.on('connected', () => console.log('Connected to sampleVueService database'));
    database.on('disconnected', () => console.log('Disconnected from sampleVueService database'));
    process.on('SIGINT', () => {
      database.close(() => {
        console.log('sampleVueService terminated, connection closed');
        process.exit(0);
      })
    });
  };