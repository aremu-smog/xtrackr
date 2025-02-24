import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: {}) {
	return (
		<Svg width={40} height={40} viewBox='0 0 40 40' fill='none' {...props}>
			<Path
				d='M34.375 20a.624.624 0 01-.625.625H6.25a.625.625 0 110-1.25h27.5a.624.624 0 01.625.625zM6.25 10.625h27.5a.624.624 0 100-1.25H6.25a.625.625 0 000 1.25zm27.5 18.75H6.25a.625.625 0 100 1.25h27.5a.624.624 0 100-1.25z'
				fill='#fff'
			/>
		</Svg>
	)
}

export default SvgComponent
