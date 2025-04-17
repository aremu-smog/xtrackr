import { Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Link } from "expo-router"

import { NewSubcriptionOption } from "../hooks"

export function SelectNewSubcriptionOption({
	options,
}: {
	options: NewSubcriptionOption[]
}) {
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header'>add subscription</XText>
				<CloseModalButton />
			</View>
			<View>
				<XText variant='body'>
					upload a screenshot, payment slip, or account statement (jpg, png, or
					pdf), and we'll automatically extract your subscription details.
					prefer to enter them manually? you can do that too.
				</XText>
			</View>

			<View>
				{options.map(option => {
					return (
						<Pressable
							key={option.id}
							style={styles.optionButton}
							onPress={option.onPress}>
							<XText>{option.title}</XText>
						</Pressable>
					)
				})}
			</View>

			<View>
				<Link href='/(modal)/reset-password' style={styles.button}>
					<XText style={styles.buttonText}>cancel</XText>
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
	optionButton: {
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors["white-16"],
	},
})
