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
  MONGO_URL: NODE_ENV === 'production' ? MONGO_URL : 'mongodb://localhost:27017/rentadb',
  PORT,
  mongooseParams,
};