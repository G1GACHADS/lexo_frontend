import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HeightMini = (props) => (
  <Svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.75 17H2.25v-1.5h13.5V17Zm0-13.5H2.25V2h13.5v1.5ZM7.5 10.775h3L9 6.725l-1.5 4.05ZM8.4 5h1.275l3.525 9h-1.5l-.675-1.95H7.05L6.375 14h-1.5L8.4 5Z"
      fill="#1E1E1E"
    />
  </Svg>
)

export default HeightMini
