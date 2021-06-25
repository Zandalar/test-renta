const fileUpload = require('express-fileupload');

const fileUploader = fileUpload({
  createParentPath: true,
})

module.exports = fileUploader;

