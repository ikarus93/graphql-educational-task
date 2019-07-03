const express = require('express'),
      app = express(),
      expressGraphQL = require('express-graphql'),
      schema = require('./schema.js');


//Middleware

//GraphQL initial settings
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));


app.listen(8080, () => {
    console.log("Server up and running on port 8080!");
})