import WorryForm from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Organisms/Worry/WorryForm",
  component: WorryForm,
  argTypes: {
    onClose: { action: "onClose" },
  },
  decorators: [
    (Story) => {
      return <Story />
    },
  ],
} as ComponentMeta<typeof WorryForm>

export const Primary: ComponentStoryObj<typeof WorryForm> = {
  args: {
    worry: {
      content: "心配事1",
      damage_rate: 0,
      id: 1,
      reality_events: "現実1",
      suppose_maximum_events: "最大値1",
      suppose_minimum_events: "最小値1",
    },
  },
}
