import { StoryObj, Meta } from '@storybook/react'
import { Avatar, IAvatarProps } from '@ui-kit/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {}

export const WithFalback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined
  }
}