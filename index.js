const renderGraphiql = require('./renderGraphiql');
const anagraphCreator = require('./Parser/anagraphCreator');

const anagraphql = options => ((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('GraphQL only supports GET and POST requests.');
    res.end();
  }
  const { schema, graphiql } = options;
  if (!schema) throw new Error('GraphQL middleware options must contain a schema.');

  const rules = {
    maxNested: 5,
  };


  if (req.body.query) {
    const anagraph = anagraphCreator(req.body.query);
    res.locals.anagraph = anagraph;
    if (anagraph.analytics.maxNested > rules.maxNested) {
      res.status(401).send({ String: 'Rule violation' });
      return res.end();
    }
  }


  if (graphiql && req.method === 'GET') {
    res.send(renderGraphiql());
    res.end();
  }


  if (!graphiql) {
    return next();
  }
  if (req.method === 'POST') next();
});

module.exports = anagraphql;
