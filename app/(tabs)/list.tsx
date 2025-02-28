import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { Row, RowItem } from "@/components/Row"
import { XText } from "@/components/XText"
import { router } from "expo-router"
import { Pressable, ScrollView, View } from "react-native"

export default function TabTwoScreen() {
	const gotoSubscriptionScreen = (id: string) => {
		router.navigate(`/(modal)/subscription/${id}`)
	}
	return (
		<PageWrapper>
			<Header />
			<View>
				<XText blurred={true} style={{ marginBottom: 16 }}>
					subscriptions
				</XText>
				<ScrollView>
					{listKeys.map(item => {
						return (
							<Pressable
								key={item}
								onPress={() => gotoSubscriptionScreen(item)}>
								<Row items={list[item]} />
							</Pressable>
						)
					})}
				</ScrollView>
			</View>
		</PageWrapper>
	)
}

const list: Record<string, RowItem[]> = {
	netflix: [
		{ id: "netflix", title: "netflix", description: "netflix.com" },
		{ id: "netflix-amount", title: "$2", description: "yearly" },
	],
	duolingo: [
		{ id: "duolingo", title: "duolingo", description: "duolingo.com" },
		{ id: "duolingo-amount", title: "$2", description: "yearly" },
	],
}

const listKeys = Object.keys(list)
