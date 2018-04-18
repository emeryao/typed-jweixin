const fs = require('fs');

let baseDir = process.cwd();

let typesFolder = `${baseDir}/../@types`;

let targetPath = `${baseDir}/../@types/jweixin`;

if (!fs.existsSync(typesFolder)) {
    fs.mkdirSync(typesFolder);
}

if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
}

console.log('Copying `jweixin.d.ts` to "./node_modules/@types/jweixin/index.d.ts" to make it work');
fs.copyFileSync(`${baseDir}/jweixin.d.ts`, `${targetPath}/index.d.ts`);