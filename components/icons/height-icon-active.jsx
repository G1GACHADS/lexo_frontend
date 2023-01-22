import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HeightIconActive = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 22H3v-2h18v2Zm0-18H3V2h18v2Zm-11 9.7h4l-2-5.4-2 5.4ZM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z"
      fill="#F1F1F1"
    />
  </Svg>
)

export default HeightIconActive
