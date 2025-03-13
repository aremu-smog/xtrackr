import { Image, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { Link, useRouter } from "expo-router"
import { colors } from "@/constants/Colors"
import { Fragment, useEffect } from "react"
import LottieView from "lottie-react-native"
import { useAuthContext } from "@/context"

export default function SplashScreen() {
	const { session } = useAuthContext()
	const router = useRouter()
	useEffect(() => {
		if (session) {
			router.replace("/(tabs)")
		}
	}, [session])
	return (
		<Fragment>
			<View style={styles.container}>
				<View>
					<Image
						source={require("@/assets/images/logo.png")}
						style={styles.logo}
					/>

					<View style={styles.imageWrapper}>
						<LottieView
							autoPlay
							speed={0.4}
							style={styles.lottie}
							source={require("@/assets/lottie/swirl.json")}
						/>

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
						<Link href='/(modal)/signup'>
							<XText style={styles.link}>signup</XText>
						</Link>
						<Link href='/(modal)/login'>
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
		position: "relative",
		width: "80%",
		alignSelf: "center",
		marginTop: 54,
	},
	image: {
		width: 320,
		height: 320,
	},
	lottie: {
		width: 450,
		height: 450,
		position: "absolute",
	},
})
