import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

export interface IAvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: IAvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User color="#fff" />
      </AvatarFallback>
    </AvatarContainer>
  )
}
