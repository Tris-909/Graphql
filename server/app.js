const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schemas/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(4000, () => {
  console.log("Running on 4000");
});
