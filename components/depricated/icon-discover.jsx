import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconDiscover = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25 13c0-6.625-5.375-12-12-12S1 6.375 1 13s5.375 12 12 12 12-5.375 12-12Z"
      stroke={props.stroke ? props.stroke : '#2B2C34'}
      strokeMiterlimit={10}
    />
    <Path
      d="m19.103 6.898-2.93 7.325a3.5 3.5 0 0 1-1.95 1.95l-7.325 2.93 2.93-7.325a3.5 3.5 0 0 1 1.95-1.95l7.325-2.93Z"
      stroke={props.stroke ? props.stroke : '#2B2C34'}
    />
    <Path
      d="M13 14.5a1.5 1.5 0 1 1 0-2.999 1.5 1.5 0 0 1 0 3Z"
      stroke={props.stroke ? props.stroke : '#2B2C34'}
    />
  </Svg>
)

export default IconDiscover
