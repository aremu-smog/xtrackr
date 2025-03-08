import { Row } from "@/components/Row"
import { XText } from "@/components/XText"
import { Fragment } from "react"
import { statistics } from "../config/stats"

export const TotalStatistics = () => {
	return (
		<Fragment>
			<XText blurred={true} style={{ marginBottom: 16 }}>
				total statistics
			</XText>
			{statistics.map((items, index) => {
				return <Row items={items} key={`total-statistics-${index}`} />
			})}
		</Fragment>
	)
}
