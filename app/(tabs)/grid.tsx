import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native"

export default function TabTwoScreen() {
	return (
		<PageWrapper>
			<Header />
			<View>
				<Pressable>
					<Image
						style={styles.image}
						source={require("@/assets/images/subscriptions.png")}
					/>
				</Pressable>
			</View>
		</PageWrapper>
	)
}

const styles = StyleSheet.create({
	image: {
		opacity: 0.2,
	},
})
