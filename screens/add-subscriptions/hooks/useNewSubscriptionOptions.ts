import { useCallback, useState } from "react"
import { useRouter } from "expo-router"
import * as DocumentPicker from "expo-document-picker"
import * as ImagePicker from "expo-image-picker"

export interface NewSubcriptionOption {
	title: string
	id: string
	onPress: () => void
}
export const useNewSubscriptionOptions = () => {
	const [pdf, setPdf] = useState<DocumentPicker.DocumentPickerAsset | null>(
		null
	)
	const [images, setImages] = useState<ImagePicker.ImagePickerAsset[] | null>(
		null
	)

	const clearImages = useCallback(() => {
		setImages(null)
	}, [])
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
	const selectImages = () => {
		ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			quality: 1,
			allowsMultipleSelection: true,
		}).then(result => {
			if (!result.canceled) {
				setImages(result.assets)
			}
		})
	}
	const options: NewSubcriptionOption[] = [
		{ title: "select images", id: "take-a-photo", onPress: selectImages },
		{ title: "upload a file", id: "upload-a-file", onPress: selectDocument },
		{ title: "enter manually", id: "enter-manually", onPress: gotoManualPage },
	]

	return { options, pdf, images, clearImages }
}
