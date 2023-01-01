import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

const IconWalking = props => (
  <Svg
    width={22}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M14.3 6.75c1.822 0 3.3-1.512 3.3-3.375S16.122 0 14.3 0C12.478 0 11 1.512 11 3.375s1.478 3.375 3.3 3.375Zm6.497 10.484-1.602-.83-.667-2.067C17.518 11.2 14.7 9.007 11.502 9c-2.475-.007-3.843.71-6.414 1.772A6.618 6.618 0 0 0 1.67 14.02l-.46.957c-.537 1.11-.104 2.46.975 3.016 1.073.555 2.38.105 2.922-1.005l.461-.957c.24-.492.64-.879 1.134-1.083l1.843-.759L7.5 18.457a4.59 4.59 0 0 0 1.024 4.134l4.118 4.599a4.57 4.57 0 0 1 1.025 1.947l1.258 5.154c.296 1.203 1.492 1.941 2.667 1.639 1.176-.303 1.898-1.526 1.602-2.728l-1.526-6.258a4.53 4.53 0 0 0-1.024-1.948l-3.128-3.494 1.182-4.83.378 1.16a4.457 4.457 0 0 0 2.18 2.6l1.601.83c1.073.556 2.38.106 2.922-1.005.53-1.104.096-2.468-.983-3.023ZM5.06 27.127c-.22.57-.55 1.082-.976 1.511L.646 32.161a2.29 2.29 0 0 0 0 3.185 2.16 2.16 0 0 0 3.108 0l4.084-4.176c.42-.43.75-.943.976-1.512l.928-2.377c-3.802-4.24-2.66-2.939-3.259-3.775l-1.423 3.62Z"
        fill={props.fill}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default IconWalking
