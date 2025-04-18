import { Alert, Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { useRouter } from "expo-router"
import { supabase } from "@/api"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const resetPasswordSchema = yup.object({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Please enter your email"),
})

type ResetPassword = yup.InferType<typeof resetPasswordSchema>

export default function ForgotPasswordScreen() {
	const router = useRouter()

	const {
		handleSubmit,
		control,
		formState: { isValid, isSubmitting },
	} = useForm<ResetPassword>({
		defaultValues: {
			email: "",
		},
		mode: "onSubmit",
		resolver: yupResolver(resetPasswordSchema),
	})
	const resetPassword: SubmitHandler<ResetPassword> = async formData => {
		const { email } = formData
		const { data, error } = await supabase.auth.resetPasswordForEmail(email)
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
				control={control}
				name='email'
				label='Email'
				placeholder='enter email'
				autoCapitalize='none'
				textContentType='emailAddress'
			/>

			<Pressable
				disabled={!isValid || isSubmitting}
				style={styles.button}
				onPress={handleSubmit(resetPassword)}>
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
