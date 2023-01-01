import Svg, { Circle, Path } from 'react-native-svg'

const IconFragileCategory = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={7} cy={7} r={7} fill="#2B2C34" />
    <Path
      d="M8.75 6V4.5h-.5V6a1.25 1.25 0 0 1-2.5 0V4h1.396l-.573.573a.25.25 0 0 0 0 .354l.323.323-.573.573.354.354.75-.75a.25.25 0 0 0 0-.354l-.323-.323.823-.823A.25.25 0 0 0 7.75 3.5H5.5a.25.25 0 0 0-.25.25V6a1.751 1.751 0 0 0 1.5 1.73V10H5.5v.5h3V10H7.25V7.73A1.751 1.751 0 0 0 8.75 6Z"
      fill="#FFFFFE"
    />
  </Svg>
)

export default IconFragileCategory
