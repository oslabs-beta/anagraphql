
const renderGraphiql = require('./renderGraphiql');
const anagraphCreator = require('./Parser/anagraphCreator');
const schemaParser = require('./Parser/schemaParser');
const ruleValidator = require('./Parser/ruleValidator');
const queryValidator = require('./Parser/queryValidator');

const anagraphql = options => ((req, res, next) => {
  if (req.body.operationName !== undefined) {
    return next();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('GraphQL only supports GET and POST requests.');
    res.end();
  }
  const { schema, graphiql, rules } = options;


  if (!schema) throw new Error('GraphQL middleware options must contain a schema.');
  let anagraph;
  let applicableRules;
  if (req.body.query) {
    if (rules !== undefined) {
      applicableRules = schemaParser(schema);
      const validateRules = ruleValidator(applicableRules, rules);
      if (validateRules.error) {
        res.status(422).send({ error: validateRules.error });
        return res.end();
      }
    }

    anagraph = anagraphCreator(req.body.query);
    const evaluation = queryValidator(anagraph, rules);
    if (evaluation.error) {
      res.status(422).send({ error: evaluation.error });
      return res.end();
    }
    res.locals.anagraph = anagraph;
  }


  if (graphiql && req.method === 'GET') {
    if (rules === undefined) res.send(renderGraphiql());
    if (rules) res.send(renderGraphiql(rules, anagraph, applicableRules));
    res.end();
  }


  if (!graphiql) {
    return next();
  }
  if (req.method === 'POST') next();
});

module.exports = anagraphql;
