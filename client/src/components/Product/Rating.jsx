import { HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FaStar } from 'react-icons/fa'

export const Rating = (props) => {
  const { defaultValue = 0, max = 5, size, rootProps } = props
  const color = useColorModeValue('gray.200', 'gray.600')
  const activeColor = useColorModeValue('pink.500', 'pink.200')
  return (
    <HStack spacing="0.3" {...rootProps}>
      {Array.from({
        length: max,
      })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  )
}
