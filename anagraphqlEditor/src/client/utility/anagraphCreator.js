import parser from './queryParser';
import validator from './stringValidator';
import stringProperties from './stringProperties';

export default (query) => {
  const theOBJ = parser(query);
  const anagraph = {};
  anagraph.analytics = stringProperties.countResolvers(theOBJ);
  anagraph.analytics.maxNested = stringProperties.countDepth(query);
  return anagraph;
};
