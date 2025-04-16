import { ScrollView, StyleSheet, Pressable } from "react-native"
import { colors } from "@/constants/Colors"

import { PageWrapper } from "@/components/PageWrapper"
import { Header } from "@/components/Header"
import { LinearGradient } from "expo-linear-gradient"
import { Input } from "@/components/ui/Input"
import { Select, SelectOption } from "@/components/Select"
import { XText } from "@/components/XText"
import { Calendar, DollarCurrency } from "@/components/svgs"
import { Link } from "expo-router"

const categoryOptions: SelectOption[] = [
	{
		label: "entertainment",
		value: "entertaiment",
	},
	{
		label: "work",
		value: "work",
	},
	{
		label: "relaxation",
		value: "relaxation",
	},
]

const frequencyOptions: SelectOption[] = [
	{ label: "monthly", value: "monthly" },
	{ label: "yearly", value: "yearly" },
]
export default function NewSubscriptionScreen() {
	return (
		<PageWrapper>
			<Header />
			<ScrollView contentContainerStyle={styles.form}>
				<Input label='Subscription Name' placeholder='e.g netflix' />
				<Select
					label='Currency'
					defaultSelected='entertainment'
					options={categoryOptions}
				/>
				<Input label='Amount' placeholder='' icon={<DollarCurrency />} />
				<Select
					label='Category'
					defaultSelected='entertainment'
					options={categoryOptions}
				/>
				<Select
					label='SUBSCRIPTION TYPE'
					defaultSelected={frequencyOptions[0].value}
					options={frequencyOptions}
				/>
				<Input
					label='BILLING DATE (DD/MM/YY)'
					placeholder=''
					icon={<Calendar />}
				/>
				<Input label='Link' placeholder='e.g netflix.com' />
			</ScrollView>
			<LinearGradient
				colors={["transparent", colors.black]}
				style={styles.links}>
				<Link href='/(tabs)' replace>
					<XText style={styles.link}>cancel</XText>
				</Link>
				<Pressable>
					<XText style={styles.link}>save</XText>
				</Pressable>
			</LinearGradient>
		</PageWrapper>
	)
}

const styles = StyleSheet.create({
	form: {
		gap: 16,
	},
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingHorizontal: 28,
		paddingVertical: 40,
	},
	logo: {
		width: 148,
		resizeMode: "contain",
		alignSelf: "flex-start",
	},
	link: {
		textDecorationLine: "underline",
		textDecorationColor: colors.white,
	},
	links: {
		flexDirection: "row",
		gap: 24,
		marginTop: 40,
	},
})
