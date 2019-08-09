module.exports = (applicableRules, rules) => {
  console.log(applicableRules, ' applicableRules');

  const validateRules = {};

  // const keyRules = Object.keys(rules);
  // for (let i = 0; i < keyRules.length; i += 1) {
  //   if (!applicableRules.hasOwnProperty(keyRules[i])) {
  //     validateRules.error = `${keyRules[i]} is not a valid rule`;
  //   }
  // }
  // console.log('Rules object: ', rules);

  // const resolverFunctions = Object.keys(rules.resolverFunctions);

  return validateRules;
};
