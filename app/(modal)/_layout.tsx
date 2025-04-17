import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native"
import { Slot } from "expo-router"
import { colors } from "@/constants/Colors"
import { BlurView } from "expo-blur"

export default function ModalLayout() {
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.select({
				ios: "padding",
				android: undefined,
			})}>
			<BlurView tint='extraLight' intensity={20} style={styles.wrapper}>
				<View style={styles.container}>
					<Slot />
				</View>
			</BlurView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 16,
	},
	container: {
		backgroundColor: colors.black,
		padding: 30,
		borderRadius: 24,
	},
})
