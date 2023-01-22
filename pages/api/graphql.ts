import { PrismaClient } from "@prisma/client"
import { ApolloServer, gql } from "apollo-server-micro"

import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const typeDefs = gql`
  type Worry {
    content: String
    suppose_minimum_events: String
    suppose_maximum_events: String
    reality_events: String
    damage_rate: String
    created_at: String
    update_at: String
  }

  type Query {
    hello: String
    worries: [Worry]
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello World",
    worries: async (parent: undefined, args: {}, context: any) => {
      console.log(context.prisma.worry)
      return await context.prisma.worry.findMany()
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
})

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com",
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  )
  if (req.method === "OPTIONS") {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
