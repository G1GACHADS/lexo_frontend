import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SpaceIconActive = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.5 3v18h-2V3h2Zm-18 0v18h-2V3h2Zm6 10.7h4l-2-5.4-2 5.4ZM11.7 6h1.7l4.7 12h-2l-.9-2.6H9.9L9 18H7l4.7-12Z"
      fill="#F1F1F1"
    />
  </Svg>
)

export default SpaceIconActive
