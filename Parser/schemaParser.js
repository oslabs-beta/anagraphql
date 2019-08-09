const { introspectionFromSchema } = require('../graphqlTestServer/node_modules/graphql');

module.exports = (schema) => {
  const defaultTypes = {
    // RootQueryType: true,
    ID: true,
    String: true,
    Int: true,
    __Schema: true,
    __Type: true,
    __TypeKind: true,
    Boolean: true,
    __Field: true,
    __InputValue: true,
    __EnumValue: true,
    __Directive: true,
    __DirectiveLocation: true,
  };

  const sure = introspectionFromSchema(schema);
  const jsonifiedSchema = JSON.parse(JSON.stringify(sure.__schema.types));

  const schemaRules = {
    fields: {},
    shallowResolvers: {},
    specificResolvers: {},
    maxNested: true,
    totalResolvers: true,
    totalFields: true,
  };

  for (let i = 0; i < jsonifiedSchema.length; i += 1) {
    if (!defaultTypes.hasOwnProperty(jsonifiedSchema[i].name)) {
      if (jsonifiedSchema[i].name === 'RootQueryType') {
        for (let z = 0; z < jsonifiedSchema[i].fields.length; z += 1) {
          schemaRules.specificResolvers[`${jsonifiedSchema[i].name}_${jsonifiedSchema[i].fields[z].name}`] = true;
          schemaRules.shallowResolvers[jsonifiedSchema[i].fields[z].name] = true;
        }
      }
      for (let j = 0; j < jsonifiedSchema[i].fields.length; j += 1) {
        if (jsonifiedSchema[i].fields[j].type.kind === 'SCALAR') {
          schemaRules.fields[jsonifiedSchema[i].name] = true;
        }
        if (jsonifiedSchema[i].fields[j].type.kind !== 'SCALAR') {
          if (jsonifiedSchema[i].name !== 'RootQueryType') {
            schemaRules.shallowResolvers[jsonifiedSchema[i].name] = true;
            schemaRules.specificResolvers[`${jsonifiedSchema[i].name}_${jsonifiedSchema[i].fields[j].name}`] = true;
          }
        }
      }
    }
  }
  return schemaRules;
};
