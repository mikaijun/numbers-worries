import IconArrow from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Atoms/Icon/IconArrow",
  component: IconArrow,
  render: (args) => <IconArrow {...args} style={{ color: args.color }} />,
} as ComponentMeta<typeof IconArrow>

export const Primary: ComponentStoryObj<typeof IconArrow> = {
  args: {
    color: "initial",
  },
}
