import { ApolloServer } from "apollo-server-micro"

import { resolvers, prisma, typeDefs } from "../../graphql/helper"

import type { NextApiRequest, NextApiResponse } from "next"

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
