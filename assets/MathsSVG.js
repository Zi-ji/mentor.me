import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={100} height={100} rx={36} fill="#4357AD" />
      <Path
        d="M68.208 49.208c.444 0 .792.349.792.792a.784.784 0 01-.792.792h-.791v-1.584h.791zM50.792 49.208h16.625v1.584H50.792v-1.584z"
        fill="#fff"
      />
      <Path
        d="M65.042 69H50a.784.784 0 00.792-.792v-.791h14.25a2.372 2.372 0 002.375-2.375v-14.25h.791A.784.784 0 0069 50v15.042A3.96 3.96 0 0165.042 69zM69 34.958V50a.784.784 0 00-.792-.792h-.791v-14.25a2.372 2.372 0 00-2.375-2.375h-14.25v-.791A.784.784 0 0050 31h15.042A3.96 3.96 0 0169 34.958z"
        fill="#fff"
      />
      <Path
        d="M62.667 40.5c.443 0 .791.348.791.792a.784.784 0 01-.791.791h-6.334a.784.784 0 01-.791-.791c0-.444.348-.792.791-.792h6.334zM62.667 56.333c.443 0 .791.349.791.792a.784.784 0 01-.791.792h-6.334a.784.784 0 01-.791-.792c0-.443.348-.792.791-.792h6.334zM62.667 61.083c.443 0 .791.349.791.792a.784.784 0 01-.791.792h-6.334a.784.784 0 01-.791-.792c0-.443.348-.792.791-.792h6.334zM50.792 67.417v.791A.784.784 0 0150 69a.784.784 0 01-.792-.792v-.791h1.584zM49.208 50.792h1.584v16.625h-1.584V50.792zM49.208 49.208h1.584v1.584h-1.584v-1.584zM49.208 32.583h1.584v16.625h-1.584V32.583zM50.792 31.792v.791h-1.584v-.791c0-.444.349-.792.792-.792.443 0 .792.348.792.792zM32.583 49.208h16.625v1.584H32.583v-1.584zM43.667 40.5c.443 0 .791.348.791.792a.784.784 0 01-.791.791h-2.375V40.5h2.375zM43.43 61.32c.316.302.316.808 0 1.11a.743.743 0 01-.555.237.743.743 0 01-.554-.238L40.5 60.61l1.108-1.109 1.821 1.82zM42.32 56.57a.765.765 0 011.11 0c.316.302.316.808 0 1.11l-1.822 1.82-1.108-1.108 1.82-1.821zM39.387 59.498l1.108-1.108 1.109 1.108-1.109 1.109-1.108-1.109zM41.292 42.083v2.375a.784.784 0 01-.792.792.784.784 0 01-.792-.792v-2.375h1.584zM39.708 40.5h1.584v1.583h-1.584V40.5zM41.292 38.125V40.5h-1.584v-2.375c0-.443.349-.792.792-.792.443 0 .792.349.792.792z"
        fill="#fff"
      />
      <Path
        d="M40.5 58.392L39.392 59.5l-1.821-1.82a.765.765 0 010-1.11.765.765 0 011.108 0l1.821 1.822zM39.708 40.5v1.583h-2.375a.784.784 0 01-.791-.791c0-.444.348-.792.791-.792h2.375zM38.68 62.43a.743.743 0 01-.555.237.743.743 0 01-.554-.238.765.765 0 010-1.108l1.82-1.821 1.109 1.108-1.82 1.821zM32.583 49.208v1.584h-.791A.784.784 0 0131 50c0-.443.348-.792.792-.792h.791z"
        fill="#fff"
      />
      <Path
        d="M31 34.958A3.96 3.96 0 0134.958 31H50a.784.784 0 00-.792.792v.791h-14.25a2.372 2.372 0 00-2.375 2.375v14.25h-.791A.784.784 0 0031 50V34.958zM32.583 65.042a2.372 2.372 0 002.375 2.375h14.25v.791c0 .444.349.792.792.792H34.958A3.96 3.96 0 0131 65.042V50c0 .443.348.792.792.792h.791v14.25z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent