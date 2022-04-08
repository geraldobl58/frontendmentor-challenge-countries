import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  argsTypes: {
    title: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />

Default.args = {
  title: 'Where in the world?'
}
