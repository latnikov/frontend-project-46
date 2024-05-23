import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from './parser.js';
import _ from 'lodash';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);


export const genDiff = (path1, path2) => {
  const fullPath1 = buildFullPath(path1);
  const fullPath2 = buildFullPath(path2);
  
  const data1 = readFileSync(fullPath1, 'utf-8')
  const data2 = readFileSync(fullPath2, 'utf-8')
  const [ parsedObj1, parsedObj2 ] = parse(data1, data2);

  // найти пересечение при помощи _.union
  console.log(parsedObj1);
  const keys1 = Object.keys(parsedObj1);
  const keys2 = Object.keys(parsedObj2);
  const sortedKeys = _.union(keys1, keys2).sort();
  console.log(sortedKeys);

  const diff = sortedKeys.reduce((acc, key) => {
    if (Object.hasOwn(parsedObj1, key) && !Object.hasOwn(parsedObj2, key)) {
      acc.push(` - ${key}:${parsedObj1[key]}`)
    }
    return acc;
  }, ['{'])
  console.log(diff);
}

export default genDiff;