import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ui-kit/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    children: 'Example text'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Secondary: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}