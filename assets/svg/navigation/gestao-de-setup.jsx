import * as React from "react"
import Svg, { Defs, Mask, Rect, Path, G, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Mask id="m">
          <Rect width="100%" height="100%" fill="#fff" />
          <Path d="M120 240H480V280H120z" />
          <Path d="M340 200H410V240H340z" />
        </Mask>
      </Defs>
      <G fill="#fff" mask="url(#m)">
        <Circle cx={300} cy={90} r={40} />
        <Path d="M260 140H340V310H260z" />
        <Rect x={210} y={150} width={40} height={160} rx={10} />
        <Rect x={350} y={150} width={40} height={160} rx={10} />
        <Rect x={260} y={310} width={35} height={180} rx={10} />
        <Rect x={305} y={310} width={35} height={180} rx={10} />
      </G>
      <Path className="line" d="M120 240H480V280H120z" />
      <Circle cx={150} cy={260} r={6} className="fill" />
      <Circle cx={200} cy={260} r={6} className="fill" />
      <Circle cx={250} cy={260} r={6} className="fill" />
      <Circle cx={300} cy={260} r={6} className="fill" />
      <Circle cx={350} cy={260} r={6} className="fill" />
      <Circle cx={400} cy={260} r={6} className="fill" />
      <Circle cx={450} cy={260} r={6} className="fill" />
      <Path className="line" d="M340 200H410V240H340z" />
    </Svg>
  )
}

export default SvgComponent
