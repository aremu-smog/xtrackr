import { Alert, Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { useLocalSearchParams, useRouter } from "expo-router"
import { supabase } from "@/api"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const otpSchema = yup.object({
	token: yup
		.string()
		.required("Please enter your otp")
		.min(6, "OTP must be of 6 characters"),
})

type OtpForm = yup.InferType<typeof otpSchema>
export default function ForgotPasswordSVerifycreen() {
	const router = useRouter()

	const params = useLocalSearchParams()
	const email = params.email as string

	const {
		formState: { isValid, isSubmitting },
		handleSubmit,
		control,
		setValue,
	} = useForm<OtpForm>({
		mode: "onSubmit",
		defaultValues: {
			token: "",
		},
		resolver: yupResolver(otpSchema),
	})

	const verifyEmail: SubmitHandler<OtpForm> = async formData => {
		const { token } = formData
		const { data, error } = await supabase.auth.verifyOtp({
			email,
			token,
			type: "recovery",
		})

		if (error) {
			Alert.alert("Unable to verify email")
			return
		}

		if (data) {
			router.replace("/(modal)/new-password")
		}
	}

	const resendEmail = async () => {
		const { data, error } = await supabase.auth.resetPasswordForEmail(email)
		console.log({ data, error })
		if (error) {
			Alert.alert("Unable to send you the verification email")
			return
		}

		if (data) {
			Alert.alert("New OTP sent to your mail")
			setValue("token", "")
		}
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
			<Input
				control={control}
				label='ONE-TIME PASSWORD'
				placeholder='enter otp'
				textContentType='oneTimeCode'
				name='token'
			/>

			<Pressable
				disabled={!isValid || isSubmitting}
				style={styles.button}
				onPress={handleSubmit(verifyEmail)}>
				<XText style={styles.buttonText}>verify email</XText>
			</Pressable>
			<Pressable style={styles.button} onPress={resendEmail}>
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
