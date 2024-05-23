export const parse = (file1, file2) => {
  const parsedObj1 = JSON.parse(file1);
  const parsedObj2 = JSON.parse(file2);

  return [parsedObj1, parsedObj2];
}