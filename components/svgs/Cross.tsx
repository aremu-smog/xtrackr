import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: { width?: number; height?: number }) {
	const { width = 40, height = 48 } = props
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 40 48'
			fill='none'
			{...props}>
			<Path
				d='M31.692 34.808a.625.625 0 01-.884.884L20 24.884 9.193 35.692a.625.625 0 11-.885-.884L19.116 24 8.308 13.192a.625.625 0 11.885-.884L20 23.116l10.808-10.808a.626.626 0 01.884.884L20.886 24l10.807 10.808z'
				fill='#fff'
			/>
		</Svg>
	)
}

export default SvgComponent
