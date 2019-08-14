
const parser = (q) => {
  const formatted = q.replace(/ *\([^)]*\) */g, '')
    .slice(1, -1)
    .replace(/(\s*{)/g, '{')
    .split(/\s/g)
    .filter(cv => cv !== '');
  let i = 0;
  const arr = formatted.slice();
  const helper = () => {
    const test = {};
    while (arr[i] && arr[i] !== '}') {
      if (arr[i] && arr[i][arr[i].length - 1] === '{') {
        test[arr[i++].slice(0, -1)] = helper();
      } else if (arr[i] !== '}') {
        test[arr[i]] = 'val';
      }
      i += 1;
    }
    return test;
  };
  return helper();
};


module.exports = parser;
