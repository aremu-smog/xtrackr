import { supabase } from "@/api"
import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { Row } from "@/components/Row"
import { Select } from "@/components/Select"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { useRouter } from "expo-router"
import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native"

export default function SettingsScreen() {
	const router = useRouter()
	const logout = async () => {
		const { error } = await supabase.auth.signOut()
	}
	return (
		<PageWrapper>
			<Header />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}>
				<XText blurred={true}>options</XText>
				<View>
					<View style={styles.form}>
						<Select
							label='default view'
							options={[
								{
									value: "grid",
									label: "grid",
								},
								{
									value: "list",
									label: "list",
								},
							]}
						/>

						<Select
							label='theme'
							defaultSelected='dark'
							options={[
								{
									value: "system-default",
									label: "system default",
								},
								{
									value: "light",
									label: "light",
								},
								{
									value: "dark",
									label: "dark",
								},
							]}
						/>

						<Select
							label='currency'
							defaultSelected='dark'
							options={[
								{
									value: "us-dollar",
									label: "us dollar ($)",
								},
								{
									value: "euro",
									label: "euros (€)",
								},
								{
									value: "pounds",
									label: "british pounds",
								},
								{
									value: "naira",
									label: "nigerian naira",
								},
							]}
						/>
						<Row
							items={[
								{
									title: "EXCHANGE RATES (TO USD)",
									titleVariant: "small",
									id: "exchange-rate",
									description: <ExchangeRates />,
								},
							]}
						/>
					</View>
				</View>
				<XText style={styles.description} variant='body'>
					the exchange rates are gotten from{" "}
					<Text style={styles.dataSource}>google</Text> finance. they are
					consistently updated but may not accurately reflect market data.
				</XText>
				<Pressable onPress={logout} style={styles.loginButton}>
					<XText variant='header' style={styles.loginButtonText}>
						logout
					</XText>
				</Pressable>
			</ScrollView>
		</PageWrapper>
	)
}

interface ExchangeRateItem {
	currency: string
	amount: string
}

const exchangeRates: ExchangeRateItem[] = [
	{
		currency: "usd ($)",
		amount: "1.00",
	},
	{
		currency: "eur (€)",
		amount: "1.25",
	},
	{
		currency: "gbp (£)",
		amount: "0.80",
	},
	{
		currency: "ngn (N)",
		amount: "1,667",
	},
]

const ExchangeRates = () => {
	return (
		<View>
			{exchangeRates.map(exchangeRate => {
				return <ExchangeRate key={exchangeRate.currency} {...exchangeRate} />
			})}
		</View>
	)
}
const ExchangeRate = ({ currency, amount }: ExchangeRateItem) => {
	return (
		<View style={styles.row}>
			<XText style={styles.text}>{currency}</XText>
			<View style={styles.line} />
			<XText style={styles.text}>{amount}</XText>
		</View>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		paddingBottom: 84,
	},
	form: {
		gap: 16,
		marginTop: 32,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		gap: 8,
	},
	text: {
		color: "#A5A4A9",
	},
	line: {
		height: 1,
		backgroundColor: "#2C2B35",
		flex: 1,
	},
	description: {
		color: "#A5A4A9",
	},
	dataSource: {
		color: colors.white,
	},
	loginButton: {
		marginTop: 16,
	},
	loginButtonText: {
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
	},
})
