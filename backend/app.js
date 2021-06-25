require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const router = require('./routes/index');
const centralErrorHandler = require('./middlewares/centralErrorHandler');
const config = require('./config/config');
const fileUploader = require('./middlewares/fileUpload');

const staticPath = path.join(__dirname, '..', 'build');

const app = express();

mongoose.connect(config.MONGO_URL, config.mongooseParams);

app.use(express.static(staticPath));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(limiter);
app.use(fileUploader);
app.use('/', router);
app.use(errorLogger);
app.use(errors());
app.use(centralErrorHandler);

app.use('*', (req, res, next) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(config.PORT);