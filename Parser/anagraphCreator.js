const parser = require('./queryParser');
const validator = require('./stringValidator');
const stringProperties = require('./stringProperties');


//Exporting an anonyous function that takes one param, a query, and returns the anagraph object. 
module.exports = (query) => {
  const theOBJ = parser(query);
  const anagraph = {};
  anagraph.analytics = stringProperties.countResolvers(theOBJ);
  anagraph.analytics.maxNested = stringProperties.countDepth(query);
  return anagraph;
};
