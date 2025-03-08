import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import {
	SpendingChart,
	SpendingSummary,
	TotalStatistics,
} from "@/screens/home/components"
import { ScrollView, StyleSheet } from "react-native"

export default function HomeScreen() {
	return (
		<PageWrapper>
			<Header />
			<ScrollView
				contentContainerStyle={{ paddingBottom: 100 }}
				style={styles.wrapper}
				showsVerticalScrollIndicator={false}>
				<SpendingChart />
				<TotalStatistics />
				<SpendingSummary />
			</ScrollView>
		</PageWrapper>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingBottom: 500,
	},
})
