import LinkButtonBordered from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Molecules/Link/LinkButtonBordered",
  component: LinkButtonBordered,
} as ComponentMeta<typeof LinkButtonBordered>

export const Primary: ComponentStoryObj<typeof LinkButtonBordered> = {
  args: {
    href: "aaaaa",
    children: "LinkButtonBordered",
  },
}
