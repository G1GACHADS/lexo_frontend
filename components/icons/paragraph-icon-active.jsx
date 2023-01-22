import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ParagraphIconActive = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 17h18v2H3v-2ZM3 2h18v2H3V2Zm0 18h18v2H3v-2ZM13 8h2l-3-3-3 3h2v5H9l3 3 3-3h-2V8Z"
      fill="#F1F1F1"
    />
  </Svg>
)

export default ParagraphIconActive
