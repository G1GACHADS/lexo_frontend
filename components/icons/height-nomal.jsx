import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HeightNormal = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.875 22.917H3.125v-2.084h18.75v2.084Zm0-18.75H3.125V2.083h18.75v2.084ZM10.417 14.27h4.166L12.5 8.646l-2.083 5.625Zm1.25-8.021h1.77l4.896 12.5H16.25l-.938-2.708h-5.52l-.938 2.708H6.771l4.896-12.5Z"
      fill="#1E1E1E"
    />
  </Svg>
)

export default HeightNormal
