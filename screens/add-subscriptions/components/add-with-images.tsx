import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment, useState } from "react"
import { Link } from "expo-router"

import { AddSubscriptionHeader } from "./header"
import { ImagePickerAsset } from "expo-image-picker"

export function AddSubscriptionWithImages({
	images,
	clearImages,
}: {
	images: ImagePickerAsset[]
	clearImages: () => void
}) {
	const [isAnalzying, setIsAnalyzing] = useState(false)

	const analyzeImages = () => {
		setIsAnalyzing(true)
	}
	return (
		<Fragment>
			<AddSubscriptionHeader
				title={isAnalzying ? "analyzing images..." : "preview"}
			/>

			{!isAnalzying && (
				<ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
					{images.map(image => {
						return (
							<Image
								key={image.assetId}
								source={{ uri: image.uri }}
								width={300}
								height={400}
							/>
						)
					})}
				</ScrollView>
			)}

			<View style={styles.buttonGroup}>
				<Pressable style={styles.button} onPress={clearImages}>
					<XText style={styles.buttonText}>cancel</XText>
				</Pressable>
				{!isAnalzying && (
					<Pressable style={styles.button} onPress={analyzeImages}>
						<XText style={styles.buttonText}>analyze</XText>
					</Pressable>
				)}
			</View>
		</Fragment>
	)
}

const styles = StyleSheet.create({
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
	scrollView: {
		gap: 16,
	},
	buttonGroup: {
		flexDirection: "row",
		gap: 24,
	},
})
