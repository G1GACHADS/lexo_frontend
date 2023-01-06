import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TextIconActive = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.667 5.333v4h6.666v16h4v-16H20v-4H2.667ZM28 12H16v4h4v9.333h4V16h4v-4Z"
      fill="#F1F1F1"
    />
  </Svg>
)

export default TextIconActive
