import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, StyleSheet, View } from "react-native"

export default function HomeScreen() {
	return (
		<PageWrapper>
			<Header />
			<ScrollView
				contentContainerStyle={{ paddingBottom: 100 }}
				style={styles.werapper}
				showsVerticalScrollIndicator={false}>
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
									{category.amount}
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

				<XText blurred={true} style={{ marginBottom: 16 }}>
					total statistics
				</XText>
				<Row
					items={[
						{
							title: "23 subscriptions",
							description: "number of active subscriptions",
							id: "active-subscriptions",
						},
					]}
				/>

				<Row
					items={[
						{
							title: "$2,500",
							description: "monthly payment",
							id: "monthly-payment",
						},
						{
							title: "4",
							description: "subscriptions",
							id: "monthly-subscriptions",
						},
					]}
				/>
				<Row
					items={[
						{
							title: "$12,500",
							description: "yearly payment",
							id: "yearly-payment",
						},
						{
							title: "13",
							description: "subscriptions",
							id: "yearly-subscriptions",
						},
					]}
				/>
				<Row
					items={[
						{
							title: "$1028",
							description: "most expensive subscription (linkedin)",
							id: "most-expensive-sub",
						},
					]}
				/>
				<XText blurred={true}>summary</XText>
				<View>
					<XText>save $4</XText>
					<XText variant='body'>
						we identified 3 similar entertainment subscriptions - Netflix,
						Disney+ and Amazon Prime. cancel 2 out of 3 to save $4.
					</XText>
				</View>
			</ScrollView>
		</PageWrapper>
	)
}

interface ExpenseCategory {
	label: string
	color: string
	color2: string
	amount: number
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

interface Item {
	id: string
	title: string
	description: string
}
const Row = ({ items }: { items: Item[] }) => {
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

const expenseCategories: ExpenseCategory[] = [
	{
		label: "entertainment",
		color: "#E05F09",
		color2: "#2A120D",
		amount: 300,
	},
	{
		label: "internet",
		color: "#FF0000",
		color2: "#2C040E",
		amount: 1600,
	},
	{
		label: "professional",
		color: "#068F33",
		color2: "#041A15",
		amount: 2000,
	},
	{
		label: "learning",
		color: "#06618F",
		color2: "#041324",
		amount: 500,
	},
]

const highestExpense = [...expenseCategories].sort((a, b) => {
	return b.amount - a.amount
})[0]

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
})
