import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ui-kit/react'

export default {
  title: 'Surfaces/box',
  component: Box,
  tags: ['autodocs'],

  args: {
    children: (
      <>
        <span>Componente de box</span>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  
}