import InputTextField from "./index"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  title: "Molecules/Input/InputTextField",
  component: InputTextField,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof InputTextField>

// const Template: ComponentStory<typeof InputTextField> = (args) => (
//   <InputTextField {...args} />
// )
export const Primary: ComponentStoryObj<typeof InputTextField> = {
  args: {
    disabled: false,
  },
}

// export const Primary = Template.bind({})
// Primary.args = { clearable: false, disabled: false }

// export const Obscurable = Template.bind({})
// Obscurable.args = { ...Primary.args, obscurable: true }

// export const Clearable = Template.bind({})
// Clearable.args = { ...Primary.args, clearable: true }

// export const Disabled = Template.bind({})
// Disabled.args = { ...Primary.args, disabled: true }

// export const WithIcon = Template.bind({})
// WithIcon.args = {
//   ...Primary.args,
//   icon: <IconSearch style={{ fontSize: "0.9rem" }} />,
// }
