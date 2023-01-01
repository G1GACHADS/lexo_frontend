import Svg, { Path } from 'react-native-svg'

const IconHistory = props =>
  props.filled ? (
    <Svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.5 21h12a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v13c0 1.657-.343 3-2 3Z"
        fill="#E45858"
        stroke="#FFFFFE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 10a2 2 0 0 1 2-2h2v10.5c0 1.38-.62 2.5-2 2.5s-2-1.12-2-2.5V10Z"
        fill="#E45858"
        stroke="#FFFFFE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#E45858"
        stroke="#FFFFFE"
        strokeLinecap="round"
      />
      <Path d="M11.5 14h6-6Zm0 3h3-3Z" fill="#E45858" />
      <Path d="M11.5 14h6m-6 3h3" stroke="#FFFFFE" strokeLinecap="round" />
    </Svg>
  ) : (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 21h12a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v13c0 1.657-.343 3-2 3Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10a2 2 0 0 1 2-2h2v10.5c0 1.38-.62 2.5-2 2.5s-2-1.12-2-2.5V10Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14h6m-6 3h3"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  )

export default IconHistory
