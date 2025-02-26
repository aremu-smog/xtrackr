import { ReactNode } from "react"
import { SafeAreaView, View } from "react-native"

export const PageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, paddingHorizontal: 20 }}>{children}</View>
		</SafeAreaView>
	)
}
