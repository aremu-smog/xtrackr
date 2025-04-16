import { Alert, Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { useRouter } from "expo-router"
import { supabase } from "@/api"

export default function ForgotPasswordScreen() {
	const router = useRouter()
	const [email, setEmail] = useState("")

	const gotoVerifyscreen = async () => {
		if (!email) {
			Alert.alert("Kindly enter an email address")
			return
		}

		const { data, error } = await supabase.auth.resetPasswordForEmail(email)
		console.log({ data, error })
		if (error) {
			Alert.alert("Unable to reset your password")
			return
		}

		if (data) {
			router.replace(`/(modal)/reset-password-verify/${email}`)
		}
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
			<Input
				label='Email'
				value={email}
				onChangeText={setEmail}
				placeholder='enter email'
			/>

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
