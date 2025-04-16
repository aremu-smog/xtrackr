import { Pressable, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Link, useRouter } from "expo-router"
import * as DocumentPicker from "expo-document-picker"
// import Pdf from "react-native-pdf"

function AddSubscriptionOption() {
	const { options, pdf } = useSubscriptionOptions()
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
			{pdf ? (
				<View />
			) : (
				// <Pdf
				// 	source={{ uri: pdf.uri }}
				// 	onLoadComplete={(numberOfPages, filePath) => {
				// 		console.log(`Number of pages: ${numberOfPages}`)
				// 	}}
				// 	onPageChanged={(page, numberOfPages) => {
				// 		console.log(`Current page: ${page}`)
				// 	}}
				// 	onError={error => {
				// 		console.log(error)
				// 	}}
				// 	onPressLink={uri => {
				// 		console.log(`Link pressed: ${uri}`)
				// 	}}
				// />
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
			)}
			<View>
				<Link href='/(modal)/reset-password' style={styles.button}>
					<XText style={styles.buttonText}>cancel</XText>
				</Link>
			</View>
		</Fragment>
	)
}

const useSubscriptionOptions = () => {
	const [pdf, setPdf] = useState<DocumentPicker.DocumentPickerAsset | null>(
		null
	)
	const router = useRouter()
	const selectDocument = () => {
		DocumentPicker.getDocumentAsync().then(value => {
			if (!value.canceled) {
				setPdf(value.assets[0])
			}
		})
	}
	const gotoManualPage = () => {
		router.navigate("/new-subscription")
	}
	const options = [
		{ title: "take a photo", id: "take-a-photo", onPress: null },
		{ title: "upload a file", id: "upload-a-file", onPress: selectDocument },
		{ title: "enter manually", id: "enter-manually", onPress: gotoManualPage },
	]

	return { options, pdf }
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
export default AddSubscriptionOption
