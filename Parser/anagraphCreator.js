const parser = require('./queryParser');
const validator = require('./stringValidator');
const stringProperties = require('./stringProperties');


//Exporting an anonyous function that takes one param, a query, and returns the anagraph object. 

//This file exports the anagraph object. The anagraph object contain values that are the result of passing the incoming query through the parser function and then passing that result (theOBJ) through the stringProperties function.
module.exports = (query) => {
  const theOBJ = parser(query);
  const anagraph = {};
  anagraph.analytics = stringProperties.countResolvers(theOBJ);
  anagraph.analytics.maxNested = stringProperties.countDepth(query);
  return anagraph;
};
