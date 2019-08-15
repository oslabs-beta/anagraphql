
const renderGraphiql = require('./renderGraphiql');
const anagraphCreator = require('./Parser/anagraphCreator');
const schemaParser = require('./Parser/schemaParser');
const ruleValidator = require('./Parser/ruleValidator');
const queryValidator = require('./Parser/queryValidator');

const anagraphql = options => ((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('GraphQL only supports GET and POST requests.');
    res.end();
  }

  const { schema, graphiql, rules } = options;
  if (!schema) throw new Error('GraphQL middleware options must contain a schema.');
  const applicableRules = schemaParser(schema);

  if (req.body.operationName !== undefined && graphiql) {
    const oldSend = res.send;
    res.send = function (...data) {
      // arguments[0] (or `data`) contains the response body
      res.send = oldSend;
      data[0] = JSON.stringify({ ...JSON.parse(data[0]), applicableRules });
      oldSend.apply(res, data);
    };
    return next();
  }


  if (graphiql && req.method === 'GET') {
    if (!graphiql) return next();
    if (rules === undefined) res.send(renderGraphiql());
    if (rules) res.send(renderGraphiql(rules));
    return res.end();
  }

  if (req.body.query) {
    const RULES_TO_CHECK = req.body.currRule || rules
    console.log(`RULES IN BACKEND: ${JSON.stringify(RULES_TO_CHECK)}`);
    const anagraph = anagraphCreator(req.body.query);

    if (RULES_TO_CHECK) {
      const validateRules = ruleValidator(applicableRules, RULES_TO_CHECK);
      if (validateRules.error) {
        res.status(422).send({ error: validateRules.error });
        return res.end();
      }
      const evaluation = queryValidator(anagraph, RULES_TO_CHECK);
      if (evaluation.error) {
        res.status(422).send({ error: evaluation.error });
        return res.end();
      }
    }


    if (graphiql) {
      const oldSend = res.send;
      res.send = function(...data){
      // arguments[0] (or `data`) contains the response body
      res.send = oldSend
      data[0] = JSON.stringify({ ...JSON.parse(data[0]), anagraph });
        oldSend.apply(res, data);
      }
      return next();
    }

    return next();

  }
});

module.exports = anagraphql;
