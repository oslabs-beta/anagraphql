
const parser = require('./Parser/queryParser');
const renderGraphiql = require('./renderGraphiql');

/**
 * Function that returns express middleware.
 * It accepts an options object that configures it's behavior.
 */
const anagraphql = options => ((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('GraphQL only supports GET and POST requests.');
    res.end();
  }
  const { schema, graphiql } = options;

  if (!schema) throw new Error('GraphQL middleware options must contain a schema.');

  if (graphiql && req.method === 'GET') {
    res.status(200).send(renderGraphiql());
    res.end();
  }
  else if (req.method === 'POST') next();
});

module.exports = anagraphql;
