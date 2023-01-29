import BackLink from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Molecules/Link/BackLink",
  component: BackLink,
} as ComponentMeta<typeof BackLink>

export const Primary: ComponentStoryObj<typeof BackLink> = {
  args: {
    href: "aaaaa",
  },
}
