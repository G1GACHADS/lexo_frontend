import Svg, { Circle, Path } from 'react-native-svg'

const IconChemicalCategory = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={7} cy={7} r={7} fill="#2B2C34" />
    <Path
      d="M9.808 8.905 8 6.418V4h.5v-.5h-3V4H6v2.419L4.192 8.905a1.005 1.005 0 0 0 .813 1.595h3.99a1.005 1.005 0 0 0 .813-1.595ZM6.5 6.58V4h1v2.581l.668.919H5.832l.668-.919ZM8.995 10h-3.99a.505.505 0 0 1-.408-.802L5.468 8h3.064l.872 1.198a.505.505 0 0 1-.409.802Z"
      fill="#FFFFFE"
    />
  </Svg>
)

export default IconChemicalCategory
