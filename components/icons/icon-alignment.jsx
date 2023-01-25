import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const IconAlignment = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 18v-2h18v2H0Zm4-4v-2h10v2H4Zm-4-4V8h18v2H0Zm4-4V4h10v2H4ZM0 2V0h18v2H0Z"
      fill="#797979"
    />
  </Svg>
)

export default IconAlignment
