module.exports = {
  lengthOfString: string => string.length,
  maxNested: 0,
  currentNested: 0,

  countResolvers: (object) => {
    const analytics = {
      specificResolvers: {},
      shallowResolvers: {},
      fields: {},
    };
    const recursiveObj = (object, strName, number = 0) => {
      const keys = Object.keys(object);
      for (let i = 0; i < keys.length; i += 1) {
        if (typeof object[keys[i]] === 'object') {
          if (analytics.specificResolvers.hasOwnProperty(`${strName}_${keys[i]}`)) {
            analytics.specificResolvers[`${strName}_${keys[i]}`] += 1;
          } else {
            analytics.specificResolvers[`${strName}_${keys[i]}`] = 1;
          }
          if (analytics.shallowResolvers.hasOwnProperty(keys[i])) {
            analytics.shallowResolvers[keys[i]] += 1;
          } else {
            analytics.shallowResolvers[keys[i]] = 1;
          }
          recursiveObj(object[keys[i]], keys[i]);
        } else if (analytics.fields.hasOwnProperty(keys[i])) {
          analytics.fields[keys[i]] += 1;
        } else {
          analytics.fields[keys[i]] = 1;
        }
      }
    };
    recursiveObj(object, 'RootQueryType');
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
  combinedResolvers: (obj) => {
    const arr = Object.values(obj.analytics.shallowResolvers);
    return arr.reduce((acc, ite) => acc += ite);
  },

  combinedFields: (obj) => {
    const arr = Object.values(obj.analytics.fields);
    return arr.reduce((acc, ite) => acc += ite);
  },
};
