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
      return <Story />
    },
  ],
} as ComponentMeta<typeof WorryList>

export const Primary: ComponentStoryObj<typeof WorryList> = {
  args: {
    worries: [
      {
        content: "心配事1",
        damage_rate: 0,
        id: 1,
        reality_events: "現実1",
        suppose_maximum_events: "最大値1",
        suppose_minimum_events: "最小値1",
      },
      {
        content: "心配事2",
        damage_rate: 0,
        id: 2,
        reality_events: "現実2",
        suppose_maximum_events: "最大値2",
        suppose_minimum_events: "最小値2",
      },
    ],
  },
}
