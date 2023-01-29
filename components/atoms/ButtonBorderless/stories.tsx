import ButtonBorderless from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Atoms/Button/ButtonBorderless",
  component: ButtonBorderless,
  argTypes: {
    onPress: { action: "onPress" },
  },
} as ComponentMeta<typeof ButtonBorderless>

export const Primary: ComponentStoryObj<typeof ButtonBorderless> = {
  args: {
    disabled: false,
    children: "ButtonBorderless",
  },
}
