import { View, Image, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { CrossIcon } from "./svgs"

export const Header = () => {
	return (
		<View style={styles.header}>
			<Link replace href='/(tabs)'>
				<Image
					source={require("@/assets/images/logo.png")}
					style={styles.logo}
				/>
			</Link>
			<Link href='/new-subscription' style={styles.plusIcon}>
				<CrossIcon width={28} height={32} />
			</Link>
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
	plusIcon: {
		transform: [{ rotate: "45deg" }],
	},
})
