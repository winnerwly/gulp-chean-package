var through = require('through2');

function cleanPackage(cheanList) {
  return through.obj((file, enc, cb) => {
    var fileStr = file.contents.toString()
    const fileObj = JSON.parse(fileStr)
    for (var index = 0; index < cheanList.length; index++) {
      fileObj[cheanList[index]] = undefined
    }
    file.contents = Buffer.from(JSON.stringify(fileObj))
    cb(null, file);
  });
}

module.exports = cleanPackage
