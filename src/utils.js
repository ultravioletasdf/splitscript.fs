const path = require("path");
module.exports = {
  path: path.dirname(require.main.filename).replaceAll("\\", "/") + "/files/",
};
