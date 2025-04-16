import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { Link } from "expo-router"
import { StyleSheet, View } from "react-native"

export default function TabTwoScreen() {
	return (
		<PageWrapper>
			<Header />
			<View style={styles.columns}>
				{columns.map((column, rowId) => {
					return (
						<View style={styles.column} key={`subscription-row-${rowId}`}>
							{column.map((_, columnId) => {
								const item = items.find(_item => {
									return _item.column === columnId && _item.row === rowId
								})

								const hasItem = Object.keys(item ?? {}).length > 0
								return (
									<Link
										disabled={!hasItem}
										href={`/(modal)/subscription/${item?.name}`}
										key={`subscription-cell-${rowId}-${columnId}`}>
										<View
											style={[
												styles.item,
												{
													backgroundColor: item?.color || "#0E0D19",
												},
											]}
										/>
									</Link>
								)
							})}
						</View>
					)
				})}
			</View>
		</PageWrapper>
	)
}

const columns = [
	["1", "2", "3", "4", "5"],
	["1", "2", "3", "4", "5", "6"],
	["1", "2", "3", "4", "5", "6"],
	["1", "2", "3", "4", "5"],
]

const items: {
	name: string
	row: number
	column: number
	color: string
}[] = [
	{
		name: "netflix",
		row: 0,
		column: 2,
		color: "#E40A13",
	},
	{
		name: "duolingo",
		row: 2,
		column: 4,
		color: "#78C800",
	},
]

const styles = StyleSheet.create({
	image: {
		opacity: 0.2,
	},
	columns: {
		flexDirection: "row",
		flex: 0.9,
		gap: 10,

		justifyContent: "center",
	},
	column: {
		justifyContent: "center",
		gap: 10,
	},
	item: {
		height: 72,
		width: 72,
		borderColor: "#1B1930",
		borderWidth: 0.5,
		borderRadius: 12,
		backgroundColor: "#0E0D19",
	},
})
