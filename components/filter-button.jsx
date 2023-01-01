import * as React from "react"
import Svg, { Circle, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const FilterButton = (props) => (
  <Svg
    width={32}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={16} cy={16} r={14} fill="#52535B" fillOpacity={0.5} />
    <G filter="url(#a)">
      <Circle cx={16} cy={14} r={14} fill="#FFFFFE" />
    </G>
    <Path d="M14 19v-1h4v1h-4Zm-2-5h8v1h-8v-1Zm10-4v1H10v-1h12Z" fill="#000" />
    <Defs></Defs>
  </Svg>
)

export default FilterButton
