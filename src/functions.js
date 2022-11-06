const fs = require("fs");
const { path, createDirs } = require("./utils.js");
module.exports = {
  read: function (filename) {
    return fs.readFileSync(path + filename);
  },
  write: function (filename, data) {
    createDirs(filename)
    fs.writeFileSync(path + filename, data ?? "");
    return data;
  },
  append: function (filename, data) {
    createDirs(filename)
    fs.appendFileSync(path + filename, data);
  },
  delete: function (filename) {
    fs.unlinkSync(path + filename);
  },
  rename: function (filename, newName) {
    fs.renameSync(path + filename, path + newName);
    return path + newName;
  },
  get path() {
    return path;
  },
};
