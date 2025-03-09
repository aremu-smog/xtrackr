import { XText } from "@/components/XText"
import { View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { expenseCategories } from "../config/expense-categories"
import { colors } from "@/constants/Colors"
import { ExpenseCategory } from "../types/expense-category.type"
import { Fragment } from "react"
import { formatNumber } from "@/utils"

export const SpendingChart = () => {
	const highestExpense = [...expenseCategories].sort((a, b) => {
		return b.amount - a.amount
	})[0]
	return (
		<Fragment>
			<XText blurred={true}>spending chart ($)</XText>

			<View style={styles.chartWrapper}>
				{expenseCategories.map(category => {
					const barHeight = (category.amount / highestExpense.amount) * 100
					return (
						<LinearGradient
							key={`expense-bar-${category.label}`}
							colors={[category.color, category.color2]}
							start={{ y: 0.2, x: 0.5 }}
							style={[
								styles.bar,
								{
									height: `${barHeight}%`,
								},
							]}>
							<XText variant='body' style={{ textAlign: "center" }}>
								{formatNumber(category.amount)}
							</XText>
						</LinearGradient>
					)
				})}
			</View>
			<View style={styles.labels}>
				{expenseCategories.map(expenseCategory => {
					return (
						<Label
							key={`expense-label-${expenseCategory.label}`}
							{...expenseCategory}
						/>
					)
				})}
			</View>
		</Fragment>
	)
}

const Label = (props: ExpenseCategory) => {
	const { label, color } = props
	return (
		<View style={styles.label}>
			<View style={[styles.dot, { backgroundColor: color }]}>
				<View style={styles.dotInner} />
			</View>
			<XText variant='body' style={{ opacity: 0.64 }}>
				{label}
			</XText>
		</View>
	)
}

const styles = StyleSheet.create({
	werapper: {
		flex: 1,
		paddingBottom: 500,
	},
	graph: {
		width: "100%",
		resizeMode: "contain",
	},
	chartWrapper: {
		height: 200,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		gap: 28,
		marginVertical: 16,
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 6,
		margin: 8,
		marginTop: 12,
		justifyContent: "center",
		alignItems: "center",
	},
	labels: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 40,
	},
	bar: {
		height: "100%",
		width: 48,
		borderRadius: 4,
	},
	dotInner: {
		width: 2,
		height: 2,
		borderRadius: 2,
		backgroundColor: colors.black,
	},
	label: {
		flexDirection: "row",
		alignItems: "center",
	},
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
	summaryBody: {
		marginTop: 32,
	},
	summary: {
		marginTop: 40,
	},
})
