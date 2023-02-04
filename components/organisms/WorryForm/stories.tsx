import { ApolloProvider } from "@apollo/client"

import { storyBookClient } from "../../../pages/_app"

import WorryForm from "./index"

import type { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "Organisms/Worry/WorryForm",
  component: WorryForm,
  argTypes: {
    onClose: { action: "onClose" },
  },
} as ComponentMeta<typeof WorryForm>

const Template: ComponentStory<typeof WorryForm> = (args) => {
  return (
    <ApolloProvider client={storyBookClient}>
      <WorryForm {...args} id={3} />
    </ApolloProvider>
  )
}

export const Primary = Template.bind({})
