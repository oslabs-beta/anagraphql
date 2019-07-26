
module.exports = {
  firstAndLastParentes: string => (string[0] === '{' && string[string.length - 1] === '}'),
  balancedParentes: (string) => {
    const bracks = string.match(/[{}[\]()]/g, '').join('');
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    for (let i = 0; i < bracks.length; i += 1) {
      if (bracks[i] === '(' || bracks[i] === '{' || bracks[i] === '[') {
        stack.push(bracks[i]);
      } else {
        const last = stack.pop();
        if (bracks[i] !== map[last]) return false;
      }
    }
    return (stack.length !== 0);
  },
};
