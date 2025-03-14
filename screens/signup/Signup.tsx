import { Input } from "@/components/ui/Input"
import { XText } from "@/components/XText"
import { Pressable, View, StyleSheet, Alert } from "react-native"
import { SignupComponentProps } from "./signup.type"
import { colors } from "@/constants/Colors"
import { useEffect, useState } from "react"
import { useRegisterUser } from "./hooks"
import { useAuthContext } from "@/context"

export const SignupSetupStep = ({ setStep }: SignupComponentProps) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const gotoVerify = () => {
		setStep("verify-mail")
	}
	const { session } = useAuthContext()

	useEffect(() => {
		if (session && !session.user.email_confirmed_at) {
			gotoVerify()
		}
	}, [session])
	const { registerUser, isLoading } = useRegisterUser({ onSuccess: gotoVerify })

	const handleFormSubmit = () => {
		if (!email || !password) {
			Alert.alert("Please enter email and password")
			return
		}

		registerUser(email, password)
	}
	return (
		<View>
			<Input
				label='Email'
				placeholder='enter email'
				value={email}
				onChangeText={setEmail}
				inputMode='email'
				keyboardType='email-address'
				autoCapitalize='none'
				autoCorrect={false}
			/>
			<Input
				label='Password'
				secureTextEntry={true}
				placeholder='enter your password'
				value={password}
				onChangeText={setPassword}
			/>
			<Pressable
				disabled={isLoading}
				style={styles.button}
				onPress={handleFormSubmit}>
				<XText style={styles.buttonText}>
					{isLoading ? "loading.." : "signup"}
				</XText>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 40,
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
