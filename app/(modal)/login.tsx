import { Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Input } from "@/components/ui/Input"
import { Link, useRouter } from "expo-router"

export default function LoginScreen() {
	const router = useRouter()

	const gotoHome = () => {
		router.replace("/(tabs)")
	}
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header'>login to xtrackr</XText>
				<CloseModalButton />
			</View>
			<Input label='Email' placeholder='enter email' />
			<Input
				label='Password'
				secureTextEntry={true}
				placeholder='enter your password'
			/>
			<View>
				<Pressable style={styles.button} onPress={gotoHome}>
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
