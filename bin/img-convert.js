
const colors = require('colors/safe')
const argv = require('yargs').argv
const ImgConvert = require('../lib/img-convert')

if (argv.help || argv.h) {
  console.log([
    '',
    'usage: img-convert [file]] [path]',
    '',
    'options:',
    '-i  --img        convert base64 to img',
    '-b  --base64     convert img to base64',
    '-n --name        return file with the name',
    '-e  --ext        return file with the extension',
    '-h  --help       print this list and exit.'
  ].join('\n'))
  process.exit();
}

let options = {
  file: argv._[0],
  path: argv._[1]
}

if (argv.n || argv.name) {
  // 文件名称合法校验
  options.outPutName = argv.n || argv.name
}

if (argv.e || argv.ext) {
  // 文件扩展名校验
  options.outPutName = argv.n || argv.name
}


if (argv.i || argv.img) {
  options.convertType = 'img'
  ImgConvert.imgConvertToBase64(options)

} else if (argv.b || argv.base64) {
  options.convertType = 'base64'

} else {
  console.log(colors.red('Please input convert method!'))
}
