import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
	<Svg width={40} height={40} fill='none' viewBox='0 0 40 40' {...props}>
		<Path
			fill='#fff'
			d='M20 4.375A15.625 15.625 0 1 0 35.625 20 15.642 15.642 0 0 0 20 4.375Zm0 30A14.375 14.375 0 1 1 34.375 20 14.39 14.39 0 0 1 20 34.375Zm5.625-11.25a3.75 3.75 0 0 1-3.75 3.75h-1.25v1.875a.624.624 0 1 1-1.25 0v-1.875H16.25a.624.624 0 1 1 0-1.25h5.625a2.5 2.5 0 0 0 0-5h-3.75a3.75 3.75 0 1 1 0-7.5h1.25V11.25a.625.625 0 0 1 1.25 0v1.875h3.125a.624.624 0 1 1 0 1.25h-5.625a2.5 2.5 0 0 0 0 5h3.75a3.75 3.75 0 0 1 3.75 3.75Z'
		/>
	</Svg>
)
export default SvgComponent
