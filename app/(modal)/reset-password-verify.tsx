import { Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { useRouter } from "expo-router"

export default function ForgotPasswordScreen() {
	const router = useRouter()

	const gotoNewPassword = () => {
		router.replace("/(modal)/new-password")
	}
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header' style={styles.headerText}>
					check your email
				</XText>
				<CloseModalButton />
			</View>
			<XText variant='body' style={styles.description}>
				enter the one-time password we sent to your email address. please be
				sure to check your spam folder too.
			</XText>
			<Input label='ONE-TIME PASSWORD' placeholder='enter otp' />

			<Pressable style={styles.button} onPress={gotoNewPassword}>
				<XText style={styles.buttonText}>verify email</XText>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {}}>
				<XText style={styles.buttonText} blurred={true}>
					resend
				</XText>
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
