import { Input } from "@/components/ui/Input"
import { XText } from "@/components/XText"
import { Pressable, View, StyleSheet } from "react-native"
import { SignupComponentProps } from "./signup.type"
import { colors } from "@/constants/Colors"
import { useRouter } from "expo-router"
import { useVerifyNewUser } from "./hooks"
import { useState } from "react"

export const SignupVerifyEmail = ({ setStep }: SignupComponentProps) => {
	const router = useRouter()
	const [token, setToken] = useState("")
	const gotoSignup = () => {
		router.dismissAll()
		router.push("/(tabs)")
	}

	const { isLoading, verifyOtp } = useVerifyNewUser({ onSuccess: gotoSignup })
	return (
		<View>
			<XText variant='body' style={styles.info}>
				enter the one-time password we sent to your email address. please be
				sure to check your spam folder too.
			</XText>

			<Input
				label='One-time Password'
				secureTextEntry={true}
				placeholder='enter otp'
				value={token}
				onChangeText={setToken}
			/>
			<Pressable
				disabled={isLoading}
				style={styles.button}
				onPress={() => {
					verifyOtp(token, "mymen@sharklasers.com")
				}}>
				<XText style={styles.buttonText}>
					verify email {isLoading && "..."}
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
	info: {
		marginBottom: 40,
		opacity: 0.64,
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
