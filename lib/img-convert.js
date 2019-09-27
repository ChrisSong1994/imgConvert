const fs = require('fs')
const path = require('path');

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

  toImg(data) {

  }

  toBase64() {
    const { filePath } = this.options
    let extname = path.extname(filePath).substr(1) || 'png'
    const data = fs.readFileSync(filePath, { encoding: 'base64' })
    return 'data:image/' + extname + ';base64,' + data;
  }


  imgConvertToBase64() {
    console.log('imgConvertToBase64', this.options)
    const { outPath } = this.options
    const data = this.toBase64()
    fs.writeFileSync(path.join(outPath, 'output_base.txt'), data, (err) => {
      if (err) throw err;
      console.log('写入数据成功!');
    })
  }



  base64ConvertToImg() {

  }

}

exports.imgConvertToBase64 = function (options) {
  return new ImgConvert(options).imgConvertToBase64();
};

exports.base64ConvertToImg = function (options) {
  return new ImgConvert(options).base64ConvertToImg();
};
