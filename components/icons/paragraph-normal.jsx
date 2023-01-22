import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PargaraphNormal = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.125 17.708h18.75v2.084H3.125v-2.084Zm0-15.625h18.75v2.084H3.125V2.083Zm0 18.75h18.75v2.084H3.125v-2.084Zm10.417-12.5h2.083L12.5 5.208 9.375 8.333h2.083v5.209H9.375l3.125 3.125 3.125-3.125h-2.083V8.333Z"
      fill="#1E1E1E"
    />
  </Svg>
)

export default PargaraphNormal
