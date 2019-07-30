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

  if (req.body.query) {
    res.locals.anagraph = anagraphCreator(req.body.query);
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
