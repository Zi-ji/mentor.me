import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#969696">
        <Path d="M16 13.333h-.037a1.003 1.003 0 01-.763-.4l-1.7-2.266h-3.167A2.336 2.336 0 018 8.333v-6A2.336 2.336 0 0110.333 0h11.334A2.336 2.336 0 0124 2.333v6a2.336 2.336 0 01-2.333 2.334h-2.88l-2.035 2.325a.997.997 0 01-.752.341zM10.333 2a.333.333 0 00-.333.333v6c0 .184.15.334.333.334H14a1 1 0 01.8.4l1.26 1.68 1.521-1.738a.994.994 0 01.752-.342h3.334c.184 0 .333-.15.333-.334v-6A.333.333 0 0021.667 2H10.333zM26.667 14.667h-.039a1 1 0 01-.763-.402l-1.053-1.413a1 1 0 111.604-1.196l.313.421 1.519-1.734A.994.994 0 0129 10h.667A.337.337 0 0030 9.667v-6a.337.337 0 00-.333-.334h-2a1 1 0 010-2h2A2.336 2.336 0 0132 3.667v6A2.336 2.336 0 0129.667 12h-.214l-2.034 2.325a.997.997 0 01-.752.342zM5.333 14.667a.997.997 0 01-.752-.342L2.547 12h-.214A2.336 2.336 0 010 9.667v-6a2.336 2.336 0 012.333-2.334h2a1 1 0 010 2h-2A.337.337 0 002 3.667v6c0 .18.152.333.333.333H3c.288 0 .563.124.752.341l1.519 1.735.313-.421a1 1 0 111.604 1.196l-1.053 1.413a.998.998 0 01-.763.403h-.039zM26.667 22.667A2.67 2.67 0 0124 20a2.67 2.67 0 012.667-2.667A2.67 2.67 0 0129.333 20a2.67 2.67 0 01-2.666 2.667zm0-3.334a.667.667 0 100 1.334.667.667 0 000-1.334zM31 29.333a1 1 0 01-1-1v-.666c0-.919-.748-1.667-1.667-1.667H25a1 1 0 010-2h3.333A3.67 3.67 0 0132 27.667v.666a1 1 0 01-1 1zM5.333 22.667A2.67 2.67 0 012.667 20a2.67 2.67 0 012.666-2.667A2.67 2.67 0 018 20a2.67 2.67 0 01-2.667 2.667zm0-3.334a.667.667 0 100 1.334.667.667 0 000-1.334zM1 29.333a1 1 0 01-1-1v-.666A3.67 3.67 0 013.667 24H7a1 1 0 010 2H3.667C2.748 26 2 26.748 2 27.667v.666a1 1 0 01-1 1zM16 23.333c-2.205 0-4-1.794-4-4 0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4zm0-6c-1.103 0-2 .898-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.102-.897-2-2-2zM22.333 32a1 1 0 01-1-1v-2c0-.919-.748-1.667-1.666-1.667h-7.334c-.918 0-1.666.748-1.666 1.667v2a1 1 0 01-2 0v-2a3.67 3.67 0 013.666-3.667h7.334A3.67 3.67 0 0123.333 29v2a1 1 0 01-1 1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
