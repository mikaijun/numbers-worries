import { ApolloProvider } from "@apollo/client"

import { storyBookClient } from "../../../pages/_app"

import WorryDetail from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Organisms/Worry/WorryDetail",
  component: WorryDetail,
  argTypes: {
    onChange: { action: "onChange" },
  },
  decorators: [
    (Story) => {
      return (
        <ApolloProvider client={storyBookClient}>
          <Story />
        </ApolloProvider>
      )
    },
  ],
} as ComponentMeta<typeof WorryDetail>

export const Primary: ComponentStoryObj<typeof WorryDetail> = {
  args: {
    id: "3",
  },
}
