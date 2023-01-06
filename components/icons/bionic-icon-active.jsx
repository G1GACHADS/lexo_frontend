import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BionicIconActive = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 8h18.667M7 13.333h13.333M7 18.667h18.667M7 24h8"
      stroke="#797979"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 8h10M7 13.333h7.143M7 18.667h10M7 24h4.286"
      stroke="#F1F1F1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BionicIconActive
