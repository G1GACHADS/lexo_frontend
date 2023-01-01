import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const IconHome = props => (
  <Svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1.207 9.5 8.44-8.44a.5.5 0 0 1 .707 0l8.439 8.44H17.5V18a.5.5 0 0 1-.5.5h-4.5v-7h-5v7H3a.5.5 0 0 1-.5-.5V9.5H1.207Z"
      fill={props.fill}
      stroke={props.stroke ? props.stroke : '#2B2C34'}
    />
  </Svg>
)

export default IconHome
