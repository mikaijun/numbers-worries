import React from "react"

import WorryLayout from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Layouts/WorryLayout",
  component: WorryLayout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof WorryLayout>

export const Primary: ComponentStoryObj<typeof WorryLayout> = {
  args: {
    children: <div>WorryLayout</div>,
  },
}
