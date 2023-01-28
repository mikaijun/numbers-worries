import InputTextField from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Molecules/Input/InputTextField",
  component: InputTextField,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof InputTextField>

export const Primary: ComponentStoryObj<typeof InputTextField> = {
  args: {
    disabled: false,
  },
}
