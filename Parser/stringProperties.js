module.exports = {
  lengthOfString: string => string.length,
  countResolvers: (object) => {
    const analytics = {
      resolvers: {},
      fields: {},
    };
    const checkObj = (object) => {
      const keys = Object.keys(object);
      for (let i = 0; i < keys.length; i += 1) {
        if (typeof object[keys[i]] === 'object') {
          if (analytics.resolvers.hasOwnProperty(keys[i])) {
            analytics.resolvers[keys[i]] += 1;
          } else {
            analytics.resolvers[keys[i]] = 1;
          }
          checkObj(object[keys[i]]);
        } else if (analytics.fields.hasOwnProperty(keys[i])) {
          analytics.fields[keys[i]] += 1;
        } else {
          analytics.fields[keys[i]] = 1;
        }
      }
    };
    checkObj(object);
    return analytics;
  },
};
