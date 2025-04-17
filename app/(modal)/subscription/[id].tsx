import { StyleSheet, View } from "react-native"
import { XText } from "@/components/XText"
import { colors } from "@/constants/Colors"
import { Fragment } from "react"
import { CloseModalButton } from "@/components/CloseModalButton"
import { Link, useLocalSearchParams } from "expo-router"
import { Row } from "@/components/Row"

export default function SubscriptionScreen() {
	const params = useLocalSearchParams()
	const id = params.id as string
	return (
		<Fragment>
			<View style={styles.header}>
				<XText variant='header'>view subscription</XText>
				<CloseModalButton />
			</View>
			<Row
				items={[
					{
						id: "netflix",
						title: id,
						description: "entertainment",
					},
					{
						id: "netflix-amount",
						title: "2$",
						description: "yearly",
					},
				]}
			/>
			<Row
				items={[
					{
						id: "netflix-link",
						title: "link",
						titleVariant: "small",
						description: "netflix.com/pricing",
					},
				]}
			/>
			<Row
				items={[
					{
						id: "netflix-description",
						title: "description",
						titleVariant: "small",
						description:
							"netflix is a global streaming entertainment service offering movies, tv series, and games, with unlimited viewing on any internet-connected screen for an affordable, no-commitment monthly fee.",
					},
				]}
			/>
			<Row
				items={[
					{
						id: "netflix-status",
						title: "STATUS",
						titleVariant: "small",
						description: "active",
					},
				]}
			/>
			<View style={styles.links}>
				<Link href={"/new-subscription"} replace>
					<XText style={styles.link}>edit</XText>
				</Link>
				<Link href={"/new-subscription"}>
					<XText style={[styles.link, styles.delete]}>delete</XText>
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
	links: {
		flexDirection: "row",
		gap: 24,
		marginTop: 12,
	},
	link: {
		textDecorationStyle: "solid",
		textDecorationColor: colors.white,
		textDecorationLine: "underline",
	},
	delete: {
		color: colors.red,
		textDecorationColor: colors.red,
	},
})
