/* eslint-disable space-before-blocks */
const renderGraphiql = require('./renderGraphiql');
const anagraphCreator = require('./Parser/anagraphCreator');

const anagraphql = options => ((req, res, next) => {
  if (req.body.operationName !== undefined){
    return next();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('GraphQL only supports GET and POST requests.');
    res.end();
  }
  const { schema, graphiql, rules } = options;
  if (!schema) throw new Error('GraphQL middleware options must contain a schema.');


  if (req.body.query) {
    const anagraph = anagraphCreator(req.body.query);
    res.locals.anagraph = anagraph;
    if (anagraph.analytics.maxNested > rules.maxNested) {
      res.status(401).send({ String: 'Rule violation' });
      return res.end();
    }
  }


  if (graphiql && req.method === 'GET') {
    if (rules === undefined) res.send(renderGraphiql());
    if (rules) res.send(renderGraphiql(rules));
    res.end();
  }


  if (!graphiql) {
    return next();
  }
  if (req.method === 'POST') next();
});

module.exports = anagraphql;
