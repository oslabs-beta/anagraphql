module.exports = (applicableRules, rules) => {
  // console.log(applicableRules, ' applicableRules');

  const validateRules = {};

  const keyRules = Object.keys(rules);

  for (let i = 0; i < keyRules.length; i += 1) {
    if (!applicableRules.hasOwnProperty(keyRules[i])) {
      validateRules.error = `${keyRules[i]} is not a valid rule`;
      return validateRules;
    }
  }

  if (rules.hasOwnProperty('shallowResolvers')) {
    const rulesShallowResolvers = Object.keys(rules.shallowResolvers);
    for (let i = 0; i < rulesShallowResolvers.length; i += 1) {
      if (!applicableRules.shallowResolvers.hasOwnProperty(rulesShallowResolvers[i])) {
        validateRules.error = `${rulesShallowResolvers[i]} is not a shallowResolver rule`;
        return validateRules;
      }
    }
  }

  if (rules.hasOwnProperty('specificResolvers')) {
    const rulesSpecificResolvers = Object.keys(rules.specificResolvers);
    for (let i = 0; i < rulesSpecificResolvers.length; i += 1) {
      if (!applicableRules.shallowResolvers.hasOwnProperty(rulesSpecificResolvers[i])) {
        validateRules.error = `${rulesSpecificResolvers[i]} is not a shallowResolver rule`;
        return validateRules;
      }
    }
  }

  return validateRules;
};
