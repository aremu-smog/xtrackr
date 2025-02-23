import { Image, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { Link } from "expo-router"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"

export default function SplashScreen() {
	return (
		<Fragment>
			<View style={styles.container}>
				<View>
					<Image
						source={require("@/assets/images/logo.png")}
						style={styles.logo}
					/>

					<View style={styles.imageWrapper}>
						<Image
							style={styles.image}
							source={require("@/assets/images/splash/subscriptions.png")}
						/>
					</View>
				</View>
				<View>
					<XText variant='header'>
						stay on top of your subscriptions with ease.
					</XText>
					<XText variant='body'>
						track renewals, avoid surprise charges, and manage all your
						subscriptions in one place.
					</XText>
					<View style={styles.links}>
						<Link href='/(auth)/signup'>
							<XText style={styles.link}>signup</XText>
						</Link>
						<Link href='/(auth)/login'>
							<XText style={styles.link}>login</XText>
						</Link>
					</View>
				</View>
			</View>
		</Fragment>
	)
}

const styles = StyleSheet.create({
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
	imageWrapper: {
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 320,
		height: 320,
	},
})
