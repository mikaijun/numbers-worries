import { ApolloProvider } from "@apollo/client"

import { storyBookClient } from "../../../pages/_app"

import WorriesForm from "./index"

import type { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "Organisms/Worry/WorriesForm",
  component: WorriesForm,
  argTypes: {
    onClose: { action: "onClose" },
  },
} as ComponentMeta<typeof WorriesForm>

const Template: ComponentStory<typeof WorriesForm> = (args) => {
  return (
    <ApolloProvider client={storyBookClient}>
      <WorriesForm {...args} id={"3"} />
    </ApolloProvider>
  )
}

export const Primary = Template.bind({})
