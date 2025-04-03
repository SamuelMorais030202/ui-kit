import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ui-kit/react'

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],

  args: {
    children: 'Enviar'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  
}

export const Secondary: StoryObj<ButtonProps> = {}