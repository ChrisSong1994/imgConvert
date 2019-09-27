const fs = require('fs')
const path = require('path');
const util = require('./util')

/**
 * @name ImgConvert
 * @param {Object} options 
 * @param {string} options.filePath
 * @param {string} options.outPath
 * @param {string} options.outPutName
 * @param {string} options.extname
 */
class ImgConvert {
  constructor(options) {
    this.options = options

  }

  toImg() {
    const { filePath } = this.options
    const reg = /^data:image\/([\w+]+);base64,([\s\S]+)/;
    const data = fs.readFileSync(filePath, { encoding: 'utf8' })
    const match = data.match(reg);
    return match[2]
  }

  toBase64() {
    const { filePath } = this.options
    const extname = path.extname(filePath).substr(1) || 'png'
    const data = fs.readFileSync(filePath, { encoding: 'base64' })
    return 'data:image/' + extname + ';base64,' + data;
  }


  imgConvertToBase64() {
    const { filePath, outPath, outPutName } = this.options
    const fileName = outPutName ? outPutName : `base64_${util.createTimeStamp()}`
    const pathName = outPath ? outPath : path.dirname(filePath)
    const data = this.toBase64()
    fs.writeFileSync(path.join(pathName, `${fileName}.txt`), data, (err) => {
      if (err) throw err;
    })
  }

  base64ConvertToImg() {
    const { filePath, outPath, outPutName, extname } = this.options
    const fileName = outPutName ? outPutName : `img_${util.createTimeStamp()}`
    const pathName = outPath ? outPath : path.dirname(filePath)
    const ext = extname ? extname : 'png'
    const data = this.toImg()
    fs.writeFileSync(path.join(pathName, `${fileName}.${ext}`), data, (err) => {
      if (err) throw err;
    })
  }

}

exports.imgConvertToBase64 = function (options) {
  return new ImgConvert(options).imgConvertToBase64();
};

exports.base64ConvertToImg = function (options) {
  return new ImgConvert(options).base64ConvertToImg();
};

exports.ImgConvert = ImgConvert;
export default ImgConvert;