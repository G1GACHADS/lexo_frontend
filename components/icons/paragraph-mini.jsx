import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ParagraphMini = (props) => (
  <Svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.25 13.25h13.5v1.5H2.25v-1.5ZM2.25 2h13.5v1.5H2.25V2Zm0 13.5h13.5V17H2.25v-1.5Zm7.5-9h1.5L9 4.25 6.75 6.5h1.5v3.75h-1.5L9 12.5l2.25-2.25h-1.5V6.5Z"
      fill="#1E1E1E"
    />
  </Svg>
)

export default ParagraphMini
