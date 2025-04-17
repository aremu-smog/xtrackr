import { CloseModalButton } from "@/components/CloseModalButton"
import { XText } from "@/components/XText"
import { View, StyleSheet } from "react-native"

export const AddSubscriptionHeader = ({ title }: { title: string }) => {
	return (
		<View style={styles.header}>
			<XText variant='header'>{title}</XText>
			<CloseModalButton />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 40,
	},
})
