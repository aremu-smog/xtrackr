import { Alert, Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { Link, useRouter } from "expo-router"
import { supabase } from "@/api"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const loginSchema = yup.object({
	email: yup
		.string()
		.email("Kindly enter a valid emaill address")
		.required("Please enter your email"),
	password: yup
		.string()
		.required("Please enter your password")
		.min(5, "Password must be at least 4 characters"),
})

type LoginForm = yup.InferType<typeof loginSchema>

export default function LoginScreen() {
	const router = useRouter()

	const {
		control,
		formState: { errors, isSubmitting, isValid },
		handleSubmit,
	} = useForm<LoginForm>({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur",
		resolver: yupResolver(loginSchema),
	})

	const login: SubmitHandler<LoginForm> = async formData => {
		const { email, password } = formData
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		if (error) {
			Alert.alert("Something went wrong while trying to log you in")
			return
		}

		if (data) {
			router.replace("/(tabs)")
			return
		}
	}
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header'>login to xtrackr</XText>
				<CloseModalButton />
			</View>

			<Input
				label='Email'
				placeholder='enter email'
				control={control}
				textContentType='emailAddress'
				autoCapitalize='none'
				name='email'
			/>

			<Input
				label='Password'
				secureTextEntry={true}
				placeholder='enter your password'
				control={control}
				name='password'
			/>
			<View>
				<Pressable
					disabled={!isSubmitting || isValid}
					style={styles.button}
					onPress={handleSubmit(login)}>
					<XText style={styles.buttonText}>login</XText>
				</Pressable>
				<Link href='/(modal)/reset-password' style={styles.button}>
					<XText style={styles.buttonText}>forgot password</XText>
				</Link>
			</View>
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
