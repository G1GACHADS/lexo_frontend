import Svg, { Path } from 'react-native-svg'

const IconPlus = props => (
  <Svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.5 25.833V15.5m0 0V5.167m0 10.333h10.333m-10.333 0H5.167"
      stroke="#848698"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export default IconPlus
