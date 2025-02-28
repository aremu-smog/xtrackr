import { View, Image, StyleSheet } from "react-native"

export const Header = () => {
	return (
		<View style={styles.header}>
			<Image source={require("@/assets/images/logo.png")} style={styles.logo} />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 40,
	},
	logo: {
		width: 148,
		resizeMode: "contain",
		alignSelf: "flex-start",
	},
})
