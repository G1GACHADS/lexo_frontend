import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SizeIconActive = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 18.9 5.34 4h2.32L13 18.9h-2.1l-1.22-3.5H3.32L2.1 18.9H0Zm3.94-5.3h5.12L6.22 5.42h.56L3.94 13.6ZM17.817 19.14c-.706 0-1.333-.127-1.88-.38a3.227 3.227 0 0 1-1.26-1.08c-.306-.467-.46-1-.46-1.6 0-.573.12-1.087.36-1.54.254-.467.64-.86 1.16-1.18.534-.32 1.2-.547 2-.68l4-.66v1.56l-3.58.6c-.693.12-1.2.34-1.52.66a1.64 1.64 0 0 0-.46 1.18c0 .44.174.807.52 1.1.36.293.807.44 1.34.44.68 0 1.267-.14 1.76-.42.507-.293.9-.687 1.18-1.18.294-.493.44-1.04.44-1.64v-2.74c0-.587-.22-1.06-.66-1.42-.426-.373-.993-.56-1.7-.56-.613 0-1.16.16-1.64.48a2.78 2.78 0 0 0-1.04 1.24l-1.62-.84c.2-.493.52-.933.96-1.32.44-.4.954-.713 1.54-.94.587-.227 1.2-.34 1.84-.34.827 0 1.554.16 2.18.48.627.307 1.114.74 1.46 1.3.36.547.54 1.187.54 1.92v7.32h-1.82v-2.04l.34.12c-.226.427-.533.8-.92 1.12-.386.32-.84.573-1.36.76-.52.187-1.086.28-1.7.28Z"
      fill="#F1F1F1"
    />
  </Svg>
)

export default SizeIconActive
