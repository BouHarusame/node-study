const fs = require('fs')
const config = require('./config')
var pathMap = new Map();
try {
  const files = fs.readdirSync('./' + config.web_path)
  for (var i = 0 ; i < files.length ; i ++) {
    var temp = require("./" + config["web_path"] + "/" + files[i]);
    if (temp.path) {
        for (var [key,value] of temp.path) {
            if (pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw new Error("url path异常，url:" + key);
            }
        }

    }
}
} catch (err) {
  throw new Error(err);
}
module.exports = pathMap;