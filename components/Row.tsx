import React from "react"
import { View, StyleSheet } from "react-native"
import { XText } from "./XText"

export interface RowItem {
	id: string
	title: string
	description: string
}
export const Row = ({ items }: { items: RowItem[] }) => {
	return (
		<View style={styles.row}>
			{items.map((item, index) => {
				const isOdd = index % 2 === 1
				return (
					<View key={item.id}>
						<XText style={[isOdd && { textAlign: "right" }]}>
							{item.title}
						</XText>
						<XText
							variant='body'
							style={[styles.rowBody, isOdd && { textAlign: "right" }]}>
							{item.description}
						</XText>
					</View>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		marginVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#2C2B35",
		paddingBottom: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowBody: {
		opacity: 0.64,
	},
})
