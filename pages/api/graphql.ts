import { PrismaClient } from "@prisma/client"
import { ApolloServer, gql } from "apollo-server-micro"

import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const typeDefs = gql`
  type Worry {
    id: ID
    content: String!
    suppose_minimum_events: String!
    suppose_maximum_events: String!
    reality_events: String!
    damage_rate: String!
    created_at: String!
    update_at: String!
  }

  input SaveWorryInput {
    id: ID
    content: String!
    suppose_minimum_events: String!
    suppose_maximum_events: String!
    reality_events: String!
    damage_rate: Int!
  }

  type Query {
    hello: String
    worry(id: ID): Worry
    worries: [Worry]
  }

  type Mutation {
    saveWorry(data: SaveWorryInput): Worry!
  }
`
type SaveWorryInputType = {
  data: {
    id?: number
    content: string
    suppose_minimum_events: string
    suppose_maximum_events: string
    reality_events: string
    damage_rate: number
  }
}

const resolvers = {
  Query: {
    hello: () => "Hello World",
    worry: async (_: any, args: any) => {
      return await prisma.worry.findUnique({
        where: { id: Number(args.id) },
      })
    },
    worries: async () => {
      return await prisma.worry.findMany()
    },
  },
  Mutation: {
    saveWorry: (_: any, args: SaveWorryInputType) => {
      if (args.data.id) {
        return prisma.worry.update({
          where: {
            id: Number(args.data.id),
          },
          data: {
            content: args.data.content,
            suppose_minimum_events: args.data.suppose_minimum_events,
            suppose_maximum_events: args.data.suppose_maximum_events,
            reality_events: args.data.reality_events,
            damage_rate: args.data.damage_rate,
            // TODO: 後で直す
            created_at: new Date(),
            update_at: new Date(),
          },
        })
      } else {
        return prisma.worry.create({
          data: {
            content: args.data.content,
            suppose_minimum_events: args.data.suppose_minimum_events,
            suppose_maximum_events: args.data.suppose_maximum_events,
            reality_events: args.data.reality_events,
            damage_rate: args.data.damage_rate,
            created_at: new Date(),
            update_at: new Date(),
          },
        })
      }
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
  const origin = req.headers.origin
  // NOTE: ローカル環境とstudioの場合アクセスを許可する
  const isAllowed =
    (origin && origin.includes("http://localhost")) ||
    origin === "https://studio.apollographql.com"
  if (isAllowed) {
    res.setHeader("Access-Control-Allow-Origin", origin)
  }
  res.setHeader("Access-Control-Allow-Credentials", "true")
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
