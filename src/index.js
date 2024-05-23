import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from './parser.js';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);


export const genDiff = (path1, path2) => {
  const fullPath1 = buildFullPath(path1);
  const fullPath2 = buildFullPath(path2);
  
  const data1 = readFileSync(fullPath1, 'utf-8')
  const data2 = readFileSync(fullPath2, 'utf-8')
  const [ parsedObj1, parsedObj2 ] = parse(data1, data2);
  
  console.log(parsedObj1, parsedObj2);
  

}

export default genDiff;