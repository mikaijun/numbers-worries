import { PrismaClient } from "@prisma/client"
import { gql } from "apollo-server-micro"

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
export const prisma = new PrismaClient()

export const typeDefs = gql`
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
    worry(id: ID): Worry
    worries: [Worry]
  }

  type Mutation {
    saveWorry(data: SaveWorryInput): Worry!
  }
`
export const resolvers = {
  Query: {
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
