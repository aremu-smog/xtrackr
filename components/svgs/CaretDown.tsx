import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: {}) {
	return (
		<Svg width={40} height={40} viewBox='0 0 40 40' fill='none' {...props}>
			<Path
				d='M32.943 15.442l-12.5 12.5a.623.623 0 01-.885 0l-12.5-12.5a.626.626 0 01.885-.884L20 26.616l12.058-12.058a.624.624 0 011.068.442.626.626 0 01-.183.442z'
				fill='#fff'
			/>
		</Svg>
	)
}

export default SvgComponent
