import { useRouter } from "expo-router"
import { Pressable, Image, StyleSheet } from "react-native"

export const CloseModalButton = () => {
	const router = useRouter()
	return (
		<Pressable
			style={styles.pressable}
			onPress={() => {
				if (router.canGoBack()) {
					router.back()
				} else {
					router.replace("/")
				}
			}}>
			<Image
				style={styles.icon}
				source={require("@/assets/images/close.png")}
			/>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	pressable: {
		flexShrink: 0,
		flexGrow: 0,
	},
	icon: {
		width: 40,
		height: 40,
		resizeMode: "contain",
	},
})
