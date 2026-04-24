import * as React from "react"
import Svg, { Defs, Mask, Rect, Path, G, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-337.45 -21.2923 403.744 466.1083"
      width="403.744px"
      height="466.108px"
      {...props}
    >
      <Defs>
        <Mask id="a">
          <Rect width="100%" height="100%" fill="#fff" />
          <Path d="M120 240H480V280H120z" />
          <Path d="M340 200H410V240H340z" />
        </Mask>
      </Defs>
      <G fill="#fff" mask="url(#a)" transform="translate(-457.451 -71.292)">
        <Circle cx={300} cy={90} r={40} />
        <Path d="M260 140H340V310H260z" />
        <Rect x={210} y={150} width={40} height={160} rx={10} />
        <Rect x={350} y={150} width={40} height={160} rx={10} />
        <Rect x={260} y={310} width={35} height={180} rx={10} />
        <Rect x={305} y={310} width={35} height={180} rx={10} />
      </G>
      <Path
        className="line"
        d="M-337.45 168.708H22.55000000000001V208.708H-337.45z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Circle
        cx={-307.45}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Circle
        cx={-257.45}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Circle
        cx={-207.45}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Circle
        cx={-157.45}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Circle
        cx={-107.45}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Circle
        cx={-57.451}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Circle
        cx={-7.451}
        cy={188.708}
        r={6}
        className="fill"
        fill="#fff"
        strokeWidth={1}
      />
      <Path
        className="line"
        d="M-117.45 128.708H-47.45V168.708H-117.45z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M-184.54 185.376H66.294v259.44H-184.54v-259.44z"
        fill="none"
        strokeWidth={1}
      />
      <Path
        d="M-42.813 205.42c-53.195-1.513-96.787 42.7-96.787 97.29h-18.7c-4.71 0-7.01 5.837-3.66 9.189l29.16 30.268c2.09 2.162 5.33 2.162 7.42 0l29.162-30.268c3.237-3.352.938-9.189-3.772-9.189h-18.7c0-42.159 33.235-76.21 74.204-75.67 38.88.541 71.593 34.376 72.116 74.589.522 42.267-32.4 76.751-73.161 76.751-16.827 0-32.399-5.945-44.732-15.999-4.181-3.351-10.037-3.027-13.797.865-4.39 4.54-4.08 12.215.84 16.107C-87.337 392.325-67.374 400-45.531 400c52.78 0 95.527-45.078 94.064-100.101-1.359-50.698-42.329-93.074-91.346-94.479zm-5.331 54.05c-4.285 0-7.838 3.675-7.838 8.108v39.78c0 3.784 1.986 7.351 5.121 9.297l32.609 19.998c3.762 2.271 8.57.973 10.765-2.81 2.195-3.892.94-8.864-2.718-11.134l-30.1-18.486v-36.754c0-4.324-3.553-7.999-7.839-7.999z"
        fill="#fff"
        stroke="#832a75"
        strokeWidth="8px"
      />
    </Svg>
  )
}

export default SvgComponent
