module.exports = (anagraph, rules) => {
  // console.log(anagraph);
  // console.log(rules);
  const queryValidation = {};

  const keyRules = Object.keys(rules);

  for (let i = 0; i < keyRules.length; i += 1) {
    if (typeof rules[keyRules[i]] !== 'object') {
      if (anagraph.analytics[keyRules[i]] > rules[keyRules[i]]) {
        queryValidation.error = (`${[keyRules[i]]} - Rule violation!`);
        return queryValidation;
      }
    }
  }

  if (rules.shallowResolvers) {
    const ruleShallowResolvers = Object.keys(rules.shallowResolvers);
    for (let i = 0; i < ruleShallowResolvers.length; i += 1) {
      if (anagraph.analytics.shallowResolvers[ruleShallowResolvers[i]] > rules.shallowResolvers[ruleShallowResolvers[i]]) {
        queryValidation.error = (`${[ruleShallowResolvers[i]]} - shallowResolvers rule violation!`);
        return queryValidation;
      }
    }
  }

  return queryValidation;
};
