const {
  NODE_ENV,
  MONGO_URL,
  PORT = 3000,
} = process.env;

const mongooseParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

module.exports = {
  // MONGO_URL: NODE_ENV === 'production' ? 'mongodb+srv://admin:admin@cluster0.lvbjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' : 'mongodb://localhost:27017/rentadb',
  MONGO_URL: 'mongodb+srv://admin1:12345@cluster0.lvbjj.mongodb.net/rentadb?retryWrites=true&w=majority',
  PORT,
  mongooseParams,
};