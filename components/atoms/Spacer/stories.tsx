import React from "react"

import Spacer from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Atoms/Utils/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>

export const Vertical: ComponentStoryObj<typeof Spacer> = {
  args: {
    width: 16,
  },
  decorators: [
    (story) => (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>left</div>
        {story()}
        <div>right</div>
      </div>
    ),
  ],
}

export const Horizontal: ComponentStoryObj<typeof Spacer> = {
  args: {
    height: 16,
  },
  decorators: [
    (story) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>top</div>
        {story()}
        <div>bottom</div>
      </div>
    ),
  ],
}
