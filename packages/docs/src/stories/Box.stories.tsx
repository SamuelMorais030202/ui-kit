import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ui-kit/react'

export default {
  title: 'Surfaces/box',
  component: Box,
  tags: ['autodocs'],

  args: {
    children: (
      <>
        <Text>Componente de box</Text>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  
}