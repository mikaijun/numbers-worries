import InputText from './index';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'Atoms/Input/InputText',
  component: InputText,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof InputText>;

export const Primary: ComponentStoryObj<typeof InputText> = {
  args: {
    disabled: false,
  },
};
