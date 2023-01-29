import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client"

import WorriesForm from "./index"

import type { ComponentMeta, ComponentStory } from "@storybook/react"

const GET_WORRY = gql`
  query GetWorriess($id: ID!) {
    worry(id: $id) {
      id
      content
      suppose_minimum_events
      suppose_maximum_events
      reality_events
      damage_rate
    }
  }
`

export default {
  title: "Organisms/Worry/WorriesForm",
  component: WorriesForm,
  argTypes: {
    onClose: { action: "onClose" },
  },
} as ComponentMeta<typeof WorriesForm>

const Template: ComponentStory<typeof WorriesForm> = (args) => {
  const client = new ApolloClient({
    uri: "http://localhost:3004/api/graphql",
    cache: new InMemoryCache(),
  })
  void client.cache.reset().then(
    async () =>
      await client.query({
        query: GET_WORRY,
        variables: {
          id: 3,
        },
      }),
  )

  return (
    <ApolloProvider client={client}>
      <WorriesForm {...args} />
    </ApolloProvider>
  )
}

export const Primary = Template.bind({})

// export const Primary: ComponentStoryObj<typeof WorriesForm> = {
//   args: {},
// }

// Primary.parameters = {
//   apolloClient: {
//     mocks: [
//       {
//         // Use `delay` parameter to increase loading time
//         delay: 1e21,
//         request: {
//           query: GET_WORRY,
//         },
//         variables: {
//           id: 1,
//         },
//         // result: {
//         //   data: {
//         //     worry: {
//         //       id: "a",
//         //       content: "a",
//         //       suppose_minimum_events: "a",
//         //       suppose_maximum_events: "a",
//         //       reality_events: "a",
//         //       damage_rate: 0,
//         //     },
//         //   },
//         // },
//       },
//     ],
//   },
// }
