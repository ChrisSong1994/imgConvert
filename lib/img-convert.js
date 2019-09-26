const fs = require('fs')


class ImgConvert {
  constructor(options) {
    this.options = options

  }

  img(data){

  }

  base64(){

  }


  imgConvertToBase64() {
    console.log('imgConvertToBase64', this.options)

  }

  base64ConvertToImg() {
    console.log('base64ConvertToImg', this.options)
  }

}

exports.imgConvertToBase64 = function (options) {
  return new ImgConvert(options).imgConvertToBase64();
};

exports.base64ConvertToImg = function (options) {
  return new ImgConvert(options).base64ConvertToImg();
};
