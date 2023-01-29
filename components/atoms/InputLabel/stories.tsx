import InputLabel from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Atoms/Input/InputLabel",
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>

export const Primary: ComponentStoryObj<typeof InputLabel> = {
  args: {
    children: "InputLabel",
    required: false,
  },
}
