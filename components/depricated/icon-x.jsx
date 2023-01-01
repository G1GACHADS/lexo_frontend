import Svg, { Path } from 'react-native-svg'

const IconX = props => (
  <Svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.833 10.833 2.167 2.167m8.666 0-8.666 8.666"
      stroke="#E45858"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default IconX
