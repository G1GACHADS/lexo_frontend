import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SpaceMini = (props) => (
  <Svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.5 2.75v13.5H15V2.75h1.5ZM3 2.75v13.5H1.5V2.75H3Zm4.5 8.025h3L9 6.725l-1.5 4.05ZM8.4 5h1.275l3.525 9h-1.5l-.675-1.95H7.05L6.375 14h-1.5L8.4 5Z"
      fill="#1E1E1E"
    />
  </Svg>
)

export default SpaceMini
