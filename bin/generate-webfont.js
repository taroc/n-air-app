const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const webfont = require('webfont').default;

const writeFile = promisify(fs.writeFile);

async function main() {
  const result = await webfont({
    files: './app/fonts/glyphs/*.svg',
    fontName: 'n-air',
    formats: ['woff'],
    template: './app/styles/custom-icons.less.njk',
    templateFontPath: './app/fonts/',
    templateClassName: 'icon',
    fontHeight: 1024,
    ascent: 1024,
    normalize: true,
  });

  return Promise.all([
    writeFile(path.join('app', 'fonts', 'n-air.woff'), result.woff),
    writeFile(path.join('app', 'styles', 'custom-icons.less'), result.template),
  ]);
}

main().catch(console.error);
