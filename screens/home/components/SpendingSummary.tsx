import { XText } from "@/components/XText"
import { View, StyleSheet } from "react-native"

export const SpendingSummary = () => {
	return (
		<View style={styles.summary}>
			<XText blurred={true}>summary</XText>
			<View style={styles.summaryBody}>
				<XText>save $4</XText>
				<XText variant='body'>
					we identified 3 similar entertainment subscriptions - Netflix, Disney+
					and Amazon Prime. cancel 2 out of 3 to save $4.
				</XText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	summaryBody: {
		marginTop: 32,
	},
	summary: {
		marginTop: 40,
	},
})
