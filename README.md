# anagraphql

# What is anagraphql?

Anagraphql an express middleware package that can be used to analyze graphQL queries before they interact with a database.

# Installation

To install anagraphql, run the following command in the terminal:

```
npm i anagraphql
```

# Getting started

To use anagraphql in your application, require it into the file where you're setting up your server. 

```
const anagraphql = require('anagraphql');
```


From there, add anagraphql to your app.use function, as you would with any other middleware function. To render the anagraphql interactive playground, set graphiql equal to true, as shown below:

```
app.use('/graphql',
  (req, res, next) => next(),
  anagraphql({ schema, 
  graphiql: true
  }),
  graphqlHTTP({
    schema,
  }));
```
# Anangraphql Interactive Playground

More soon...

