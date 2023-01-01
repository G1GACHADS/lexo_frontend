import Svg, { Path } from "react-native-svg"
import * as React from "react"

const IconSearch = (props) => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m11.389 10.717 1.684 1.684a.431.431 0 0 1-.61.61l-1.684-1.685a5.606 5.606 0 1 1 .61-.61v.001ZM7.13 11.812a4.744 4.744 0 1 0 0-9.488 4.744 4.744 0 0 0 0 9.489Z"
      fill="#848698"
    />
  </Svg>
)

export default IconSearch
