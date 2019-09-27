
const colors = require('colors/safe')
const argv = require('yargs').argv
const ImgConvert = require('../lib/img-convert')

// 规则：
//  假如不输入path则会把文件输出到同输入文件的目录下
//  假如不指定输出文件名称，则会输出文件前缀加上时间戳
// 假如不指定输出文件的后缀名，则会自定加上默认后缀 img:png  base64:txt

if (argv.help || argv.h || !argv._[0]) {
  console.log([
    '',
    'usage: img-convert [file]] [path]',
    '',
    'options:',
    '-i  --img        convert base64 to img',
    '-b  --base64     convert img to base64',
    '-n --name        return file with the name',
    '-e  --ext        return file with the extension img:[png,jpg], base64:txt',
    '-h  --help       print this list and exit.'
  ].join('\n'))
  process.exit();
}

let options = {
  filePath: argv._[0],
  outPath: argv._[1]
}

if (argv.n || argv.name) {   // 文件名称合法校验
  options.outPutName = argv.n || argv.name
}

if (argv.e || argv.ext) {   // 文件扩展名校验
  options.extname = argv.e || argv.ext
}



if (argv.i || argv.img) {    // base64转换成图片
  ImgConvert.base64ConvertToImg(options)

} else if (argv.b || argv.base64) {  //图片转换成base64
  ImgConvert.imgConvertToBase64(options)
} else {
  console.log(colors.red('Please input convert method!'))
  process.exit();
}
