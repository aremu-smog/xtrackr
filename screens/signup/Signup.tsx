import { Input } from "@/components/ui/Input"
import { XText } from "@/components/XText"
import { Pressable, View, StyleSheet } from "react-native"
import { SignupComponentProps } from "./signup.type"
import { colors } from "@/constants/Colors"

export const SignupSetupStep = ({ setStep }: SignupComponentProps) => {
	const gotoVerify = () => {
		setStep("verify-mail")
	}
	return (
		<View>
			<Input label='Email' placeholder='enter email' />
			<Input
				label='Password'
				secureTextEntry={true}
				placeholder='enter your password'
			/>
			<Pressable style={styles.button} onPress={gotoVerify}>
				<XText style={styles.buttonText}>signup</XText>
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
