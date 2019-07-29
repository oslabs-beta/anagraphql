module.exports = {
  lengthOfString: string => string.length,

  maxNested: 0,
  currentNested: 0,

  countResolvers: (object) => {
    const analytics = {
      resolvers: {},
      fields: {},
    };
    const recursiveObj = (object, number = 0) => {
      const keys = Object.keys(object);
      for (let i = 0; i < keys.length; i += 1) {
        if (typeof object[keys[i]] === 'object') {
          if (analytics.resolvers.hasOwnProperty(keys[i])) {
            analytics.resolvers[keys[i]] += 1;
          } else {
            analytics.resolvers[keys[i]] = 1;
          }
          recursiveObj(object[keys[i]]);
        } else if (analytics.fields.hasOwnProperty(keys[i])) {
          analytics.fields[keys[i]] += 1;
        } else {
          analytics.fields[keys[i]] = 1;
        }
      }
    };
    recursiveObj(object);
    return analytics;
  },


  countDepth: (query) => {
    let num = -1;
    let max = -1;
    for (let i = 0; i < query.length; i += 1) {
      if (query[i] === '{') num += 1;
      if (query[i] === '}') num -= 1;
      if (num > max) max = num;
    }
    return max;
  },

};
