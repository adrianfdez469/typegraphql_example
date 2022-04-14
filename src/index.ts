import "reflect-metadata"
import { buildSchema } from "type-graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { UserResolver } from "./users.resolvers"


async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true
  })
  
  const app = express()

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }))

  app.listen(8000, () => {
    console.log("GraphQL server listening on http://localhos:8000/graphql");
    
  })
}

main()
