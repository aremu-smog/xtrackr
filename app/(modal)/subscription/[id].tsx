import { StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { useLocalSearchParams } from "expo-router"
import { Row } from "@/components/Row"

export default function SubscriptionScreen() {
	const params = useLocalSearchParams()
	const id = params.id as string
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header'>view subscription</XText>
				<CloseModalButton />
			</View>
			<Row
				items={[
					{
						id: "netflix",
						title: id,
						description: "entertainment",
					},
					{
						id: "netflix-amount",
						title: "2$",
						description: "yearly",
					},
				]}
			/>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 40,
	},
	container: {
		backgroundColor: colors.black,
		padding: 40,
		borderRadius: 24,
	},

	buttonText: {
		textDecorationLine: "underline",
		textDecorationColor: colors.white,
	},
	button: {
		flexDirection: "row",
		gap: 24,
		marginTop: 24,
	},
})
