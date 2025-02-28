import { StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { SignupStep } from "@/screens/signup/signup.type"
import { signupSteps } from "@/screens/signup/constants"

export default function SignupScreen() {
	const [step, setStep] = useState<SignupStep>("signup")

	const currentStep = signupSteps[step]

	const gotoVerify = () => {
		setStep("verify-mail")
	}
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header'>{currentStep.title}</XText>
				<CloseModalButton />
			</View>
			{currentStep.component({ setStep })}
		</Fragment>
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
