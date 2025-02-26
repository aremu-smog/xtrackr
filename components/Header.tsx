import { View, Image, StyleSheet } from "react-native"

export const Header = () => {
	return (
		<View>
			<Image source={require("@/assets/images/logo.png")} style={styles.logo} />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logo: {
		width: 148,
		resizeMode: "contain",
		alignSelf: "flex-start",
	},
})
