export default (schema) => {
  const start = schema._queryType;
  const cache = {};
  let i = 1;
  const nodes = [{ name: start.name, id: 1, fields: Object.keys(start._fields) }];
  cache[start.name] = 1;
  const links = [];
  const helper = (x, prev) => {
    Object.values(x).forEach((obj) => {
      const nm = obj.type.name || obj.type.ofType.name;
      if (!(nm in cache)) {
        if (obj.type._fields || (obj.type.ofType && obj.type.ofType._fields)) {
          i += 1;
          const fields = obj.type._fields || obj.type.ofType._fields;
          const temp = { name: nm, id: i, fields: Object.keys(fields) };
          nodes.push(temp);
          cache[nm] = i;
          links.push({ source: prev, target: i });
          helper(fields, i);
        }
      } else {
        links.push({ source: i, target: cache[nm] });
      }
    });
  };
  helper(start._fields, i);
  return { nodes, links };
};
