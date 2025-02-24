import { ThemedText } from "@/components/ThemedText"
import { Link } from "expo-router"
import { View } from "react-native"

export default function TabTwoScreen() {
	return (
		<View style={{ backgroundColor: "red", marginTop: 200 }}>
			<Link href='/'>
				<ThemedText type='defaultSemiBold'>Splash Screen</ThemedText>
			</Link>
		</View>
	)
}
