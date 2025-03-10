import { Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { useRouter } from "expo-router"

export default function ForgotPasswordScreen() {
	const router = useRouter()

	const gotoVerifyscreen = () => {
		router.replace("/(modal)/reset-password-verify")
	}
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header' style={styles.headerText}>
					forgot password
				</XText>
				<CloseModalButton />
			</View>
			<XText variant='body' style={styles.description}>
				enter the email address associated with your account and we will send
				you a one-time password to reset your password.
			</XText>
			<Input label='Email' placeholder='enter email' />

			<Pressable style={styles.button} onPress={gotoVerifyscreen}>
				<XText style={styles.buttonText}>send email</XText>
			</Pressable>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 40,
	},
	headerText: {
		width: "90%",
	},
	description: {
		color: colors["white-64"],
		marginBottom: 24,
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
