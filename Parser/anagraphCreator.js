const parser = require('./queryParser');
const stringProperties = require('./stringProperties');


// Exporting an anonyous function that takes one param, a query, and returns the anagraph object.

// This file exports the anagraph object. The anagraph object contain values that are the result of passing the incoming query through the parser function and then passing that result (theOBJ) through the stringProperties function.


const anagraphCreator = (query) => {
  const theOBJ = parser(query);
  const anagraph = {};
  anagraph.analytics = stringProperties.countResolvers(theOBJ);
  anagraph.analytics.maxNested = stringProperties.countDepth(query);
  anagraph.analytics.totalResolvers = stringProperties.combinedResolvers(anagraph);
  anagraph.analytics.totalFields = stringProperties.combinedFields(anagraph);
  return anagraph;
};

module.exports = anagraphCreator;
