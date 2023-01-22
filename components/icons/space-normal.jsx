import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SpaceNormal = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.917 3.125v18.75h-2.084V3.125h2.084Zm-18.75 0v18.75H2.083V3.125h2.084Zm6.25 11.146h4.166L12.5 8.646l-2.083 5.625Zm1.25-8.021h1.77l4.896 12.5H16.25l-.938-2.708h-5.52l-.938 2.708H6.771l4.896-12.5Z"
      fill="#1E1E1E"
    />
  </Svg>
)

export default SpaceNormal
