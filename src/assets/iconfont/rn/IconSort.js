/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconSort = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M426.666667 554.666667 426.666667 469.333333 768 469.333333 768 554.666667 426.666667 554.666667M426.666667 810.666667 426.666667 725.333333 597.333333 725.333333 597.333333 810.666667 426.666667 810.666667M426.666667 298.666667 426.666667 213.333333 938.666667 213.333333 938.666667 298.666667 426.666667 298.666667M256 725.333333 362.666667 725.333333 213.333333 874.666667 64 725.333333 170.666667 725.333333 170.666667 298.666667 64 298.666667 213.333333 149.333333 362.666667 298.666667 256 298.666667 256 725.333333Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  )
}

IconSort.defaultProps = {
  size: 18,
}

IconSort = React.memo ? React.memo(IconSort) : IconSort

export default IconSort
