import { ApolloProvider } from "@apollo/client"

import { storyBookClient } from "../../../pages/_app"

import WorryList from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Organisms/Worry/WorryList",
  component: WorryList,
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
} as ComponentMeta<typeof WorryList>

export const Primary: ComponentStoryObj<typeof WorryList> = {}
