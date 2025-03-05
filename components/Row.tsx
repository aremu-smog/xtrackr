import React, { ReactNode } from "react"
import { View, StyleSheet } from "react-native"
import { XText } from "./XText"

export interface RowItem {
	id: string
	title: string
	description: string | ReactNode
	titleVariant?: "default" | "small"
}
export const Row = ({ items }: { items: RowItem[] }) => {
	return (
		<View style={styles.row}>
			{items.map((item, index) => {
				const { titleVariant, description } = item
				const isOdd = index % 2 === 1
				const isSmallTitle = titleVariant === "small"
				const isStringDescription = typeof description === "string"
				return (
					<View style={styles.item} key={item.id}>
						<XText
							style={[
								isOdd && { textAlign: "right" },
								isSmallTitle && styles.titleSmall,
							]}>
							{item.title}
						</XText>
						{isStringDescription ? (
							<XText
								variant='body'
								style={[styles.rowBody, isOdd && { textAlign: "right" }]}>
								{item.description}
							</XText>
						) : (
							description
						)}
					</View>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		marginBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#2C2B35",
		paddingBottom: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowBody: {
		opacity: 0.64,
	},
	titleSmall: {
		fontSize: 12,
		textTransform: "uppercase",
		opacity: 0.4,
		letterSpacing: 1.92,
	},
	item: {
		width: "100%",
	},
})
