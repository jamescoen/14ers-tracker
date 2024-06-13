const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      dbName: '14ersTracker',
    });
    console.log(`MongoDb Connect: ${connect.connection.host}`);
    // console.log('mongoose connection:', mongoose.connection.readyState);
    // console.log('process', process);
    // console.log('process.env', process.env);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
