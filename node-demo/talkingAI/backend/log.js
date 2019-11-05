var fs = require("fs");
var moment = require("moment");
var globalConfig = require("./config");

var fileName = globalConfig.log_path + '/' + globalConfig.log_name;

function nowDate() {
    var formatDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    return formatDate + " " + Date.now() + " ";
}

function log(data, targetFile) {
    console.log(data);
    if (targetFile == null) {
        fs.appendFile(fileName, nowDate() + data + "\n",{flag:"a"} , function () {});
    } else {
        fs.appendFile(globalConfig.log_path + targetFile, nowDate() + data + "\n",{flag:"a"} , function () {});
    }



}

module.exports = log;