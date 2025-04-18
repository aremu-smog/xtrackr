import { Alert, Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { Link } from "expo-router"
import { supabase } from "@/api"
import { yup } from "@/libs/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const newPasswordSchema: yup.ObjectSchema<{
	password: string
	passwordAgain: string
}> = yup.object({
	password: yup
		.string()
		.required("Please enter a new password")
		.min(6, "Your password must be at least 6 characters"),
	passwordAgain: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords do not match")
		.required("Please confirm your password"),
})

type NewPasswordForm = yup.InferType<typeof newPasswordSchema>
export default function ForgotPasswordScreen() {
	const [isSuccess, setIsSuccess] = useState(false)

	const {
		handleSubmit,
		formState: {},
		control,
	} = useForm<NewPasswordForm>({
		resolver: yupResolver(newPasswordSchema),
	})

	const resetPassword: SubmitHandler<NewPasswordForm> = async formData => {
		const { password } = formData

		const { error, data } = await supabase.auth.updateUser({
			password,
		})

		if (error) {
			Alert.alert("Unable to reset password, please try again")
			return
		}

		if (data) {
			await supabase.auth.signOut()
			setIsSuccess(true)
		}
	}
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header' style={styles.headerText}>
					reset password
				</XText>
				<CloseModalButton />
			</View>

			{isSuccess ? (
				<Fragment>
					<XText variant='body' style={styles.message}>
						your password has been reset successfully. you can now login to
						xtrackr.
					</XText>
					<Link href='/(modal)/login' replace>
						<XText style={styles.buttonText}>login</XText>
					</Link>
				</Fragment>
			) : (
				<Fragment>
					<Input
						label='NEW PASSWORD'
						placeholder='enter password'
						control={control}
						name='password'
					/>
					<Input
						label='CONFIRM NEW PASSWORD'
						placeholder='confirm password'
						control={control}
						name='passwordAgain'
					/>

					<Pressable
						style={styles.button}
						onPress={handleSubmit(resetPassword)}>
						<XText style={styles.buttonText}>reset</XText>
					</Pressable>
				</Fragment>
			)}
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
	message: {
		color: colors["white-64"],
		marginBottom: 40,
	},
})
