import { useNewSubscriptionOptions } from "@/screens/add-subscriptions/hooks"
import {
	AddSubscriptionWithImages,
	SelectNewSubcriptionOption,
} from "@/screens/add-subscriptions/components"

function AddSubscriptionOption() {
	const { options, images, clearImages } = useNewSubscriptionOptions()

	if (images)
		return (
			<AddSubscriptionWithImages images={images} clearImages={clearImages} />
		)
	return <SelectNewSubcriptionOption options={options} />
}

export default AddSubscriptionOption
