import { Alert, Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { Link, useRouter } from "expo-router"
import { supabase } from "@/api"

export default function LoginScreen() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const login = async () => {
		if (!email || !email) {
			Alert.alert("Please enter username and password")
			return
		}

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
				value={email}
				onChangeText={setEmail}
			/>
			<Input
				label='Password'
				secureTextEntry={true}
				placeholder='enter your password'
				value={password}
				onChangeText={setPassword}
			/>
			<View>
				<Pressable style={styles.button} onPress={login}>
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
