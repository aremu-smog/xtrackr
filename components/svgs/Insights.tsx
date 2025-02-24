import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InsightsIcon(props: {}) {
	return (
		<Svg width={28} height={36} viewBox='0 0 28 36' fill='none' {...props}>
			<Path
				d='M21.5 34.25a1.25 1.25 0 01-1.25 1.25H7.75a1.25 1.25 0 110-2.5h12.5a1.25 1.25 0 011.25 1.25zm6.25-20a13.68 13.68 0 01-5.256 10.814 2.537 2.537 0 00-.994 1.998V28a2.5 2.5 0 01-2.5 2.5H9A2.5 2.5 0 016.5 28v-.938a2.5 2.5 0 00-.973-1.978A13.685 13.685 0 01.25 14.326C.21 6.88 6.228.678 13.67.5A13.75 13.75 0 0127.75 14.25zm-5.017-1.46a9 9 0 00-7.275-7.273 1.25 1.25 0 10-.416 2.466c2.59.436 4.786 2.633 5.225 5.226a1.25 1.25 0 002.466-.418z'
				fill='#fff'
			/>
		</Svg>
	)
}

export default InsightsIcon
