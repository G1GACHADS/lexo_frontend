import Svg, { Circle, G, Path, Defs, ClipPath } from 'react-native-svg'

const IconHeavyMaterialsCategory = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={7} cy={7} r={7} fill="#2B2C34" />
    <G clipPath="url(#a)">
      <Path
        d="M6.876 3.033a.25.25 0 0 1 .248 0l1.875 1.072a.25.25 0 0 1 .126.217v1.997l1.749 1a.25.25 0 0 1 .126.216v2.143a.25.25 0 0 1-.126.217l-1.875 1.072a.25.25 0 0 1-.248 0L7 9.967l-1.751 1a.25.25 0 0 1-.248 0L3.126 9.896A.25.25 0 0 1 3 9.679V7.536a.25.25 0 0 1 .126-.217l1.749-1V4.322a.25.25 0 0 1 .126-.217l1.875-1.072Zm-1.751 3.72-1.371.783 1.371.783 1.371-.783-1.371-.784ZM6.75 7.966l-1.375.785v1.567l1.375-.785V7.967Zm.5 1.567 1.375.785V8.752L7.25 7.967v1.567Zm.254-1.998 1.371.783 1.371-.783-1.371-.784-1.371.784Zm1.121-1.217V4.752l-1.375.786v1.567l1.375-.786Zm-1.875.786V5.538l-1.375-.786V6.32l1.375.786ZM5.629 4.322 7 5.105l1.371-.783L7 3.538l-1.371.784ZM10.5 7.967l-1.375.785v1.567l1.375-.785V7.967Zm-5.625 2.352V8.752L3.5 7.967v1.567l1.375.785Z"
        fill="#FFFFFE"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(3 3)" d="M0 0h8v8H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default IconHeavyMaterialsCategory
