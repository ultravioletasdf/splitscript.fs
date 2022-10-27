const fs = require("fs");
const { path } = require("./utils.js");
module.exports = {
  read: function (filename) {
    return fs.readFileSync(root + filename);
  },
  write: function (filename, data) {
    fs.writeFileSync(root + filename, data);
    return data;
  },
  append: function (filename, data) {
    fs.appendFileSync(root + filename, data);
  },
  delete: function (filename) {
    fs.unlinkSync(root + filename);
  },
  rename: function (filename, newName) {
    fs.renameSync(root + filename, root + newName);
    return root + newName;
  },
};
