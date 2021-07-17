import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={63}
      height={63}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.431 54.592c.516-.448 12.633-11.112 12.633-22.165 0-7.642-6.295-13.86-14.032-13.86S0 24.785 0 32.427C0 43.48 12.117 54.144 12.633 54.592c.4.348.9.522 1.4.522.5 0 .998-.174 1.398-.522zM4.235 32.427c0-5.337 4.394-9.678 9.797-9.678 5.402 0 9.797 4.341 9.797 9.678 0 7.169-6.792 14.714-9.797 17.7-3.005-2.986-9.797-10.531-9.797-17.7zM47.568 36.025c.4.348.9.522 1.4.522.5 0 1-.174 1.4-.522C50.883 35.577 63 24.913 63 13.86 63 6.218 56.705 0 48.968 0S34.936 6.218 34.936 13.86c0 11.053 12.117 21.717 12.632 22.165zm1.4-31.844c5.402 0 9.797 4.342 9.797 9.679 0 7.169-6.792 14.714-9.797 17.7-3.005-2.986-9.798-10.531-9.798-17.7 0-5.337 4.396-9.679 9.798-9.679zM48.937 38.42L14.001 59.117a2.076 2.076 0 00-.726 2.868A2.122 2.122 0 0015.091 63c.371 0 .746-.096 1.088-.298l34.936-20.697a2.076 2.076 0 00.726-2.868 2.133 2.133 0 00-2.905-.717z"
        fill="#fff"
      />
      <Path
        d="M17.038 37.64c.098.16.264.265.438.35.176.087.381.131.611.131.396 0 .74-.14 1.02-.417.28-.277.423-.595.423-.945 0-.289-.111-.686-.348-1.247l-3.006-7.357a3.418 3.418 0 00-.345-.63 1.82 1.82 0 00-.611-.546c-.259-.144-.574-.217-.936-.217-.359 0-.67.073-.93.217-.25.14-.457.328-.613.558-.136.2-.264.45-.38.744l-3.15 7.937a1.85 1.85 0 00-.09.555c0 .353.15.681.434.948.283.266.615.4.989.4.557 0 .88-.219 1.006-.433.3-.51.94-2.17.94-2.17h3.604s.641 1.626.944 2.122zm-3.692-4.505l.927-2.554.944 2.554h-1.871zM51.103 19.258c.442-.057.843-.16 1.197-.305a3.075 3.075 0 001.382-1.168c.338-.522.51-1.115.51-1.763 0-.828-.288-1.88-1.532-2.552.688-.538 1.046-1.275 1.046-2.168 0-.344-.058-.676-.173-.987a2.83 2.83 0 00-.503-.854 2.959 2.959 0 00-.751-.633 3.187 3.187 0 00-1.12-.403 8.35 8.35 0 00-1.35-.095h-3.338c-.56 0-.986.14-1.266.417-.281.277-.423.703-.423 1.264v7.65c0 .549.137.969.408 1.25.277.286.708.431 1.28.431h3.15c.56 0 1.06-.028 1.483-.084zm-3.386-8.568h1.77c.504 0 .912.404.912.902a.92.92 0 01-.913.916h-1.77V10.69zm0 4.133h2.397c.596 0 1.08.477 1.08 1.065 0 .589-.484 1.07-1.08 1.07h-2.397v-2.135z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
