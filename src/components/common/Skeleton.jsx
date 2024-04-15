import React from 'react'
import { View } from '@tarojs/components'

const Skeleton = props => {
  //? Porps
  const { count, children } = props

  //? Assets
  const arr = Array(count).fill('_')

  //? Render(s)
  return (
    <>
      {arr.map((item, index) =>
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { index })
          }

          return child
        })
      )}
    </>
  )
}

const Items = props => {
  //? Props
  const { index, children, ...rest } = props
  //? Render(s)
  return (
    <View {...rest}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { index })
        }

        return child
      })}
    </View>
  )
}

export const Item = ({ index, height, width, animated, style, children, className }) => {
  return (
    <View
      key={index}
      className={`${height} ${width} ${
        animated === 'background'
          ? 'animate-pulse bg-red-200'
          : animated === 'border'
            ? 'animate-pulse border-2 border-red-200'
            : 'bg-white'
      } rounded-md ${className}`}
    >
      {children}
    </View>
  )
}

const _default = Object.assign(Skeleton, {
  Skeleton,
  Items,
  Item,
})

export default _default
