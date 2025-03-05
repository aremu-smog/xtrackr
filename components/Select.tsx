import { Fragment, ReactNode, useState } from "react"
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native"
import { XText } from "./XText"
import { BlurView } from "expo-blur"
import { colors } from "@/constants/Colors"

interface SelectOption {
	label: string | ReactNode
	value: string
}

interface SelectProps {
	defaultSelected?: string
	options: SelectOption[]
}
export const Select = (props: SelectProps) => {
	const { defaultSelected = "", options } = props
	const [selectedValue, setSelectedValue] = useState(defaultSelected)
	const [isVisible, setIsVisible] = useState(false)

	const selectedOption = options.find(option => option.value === selectedValue)
	return (
		<Fragment>
			<Pressable
				onPress={() => {
					setIsVisible(true)
				}}>
				<XText>{selectedOption?.label ?? "select option"}</XText>
			</Pressable>
			<Modal visible={isVisible} style={styles.modal} transparent={true}>
				<BlurView tint='extraLight' style={styles.blurView} intensity={20}>
					<View style={styles.container}>
						<View style={styles.modalHeader}>
							<XText>default view</XText>
							<Pressable
								onPress={() => {
									setIsVisible(false)
								}}>
								<XText>x</XText>
							</Pressable>
						</View>
						<ScrollView style={styles.options}>
							{options.map(option => {
								return (
									<Pressable
										key={option.value}
										style={styles.option}
										onPress={() => {
											setSelectedValue(option.value)
											setIsVisible(false)
										}}>
										<XText>{option.label}</XText>
									</Pressable>
								)
							})}
						</ScrollView>
					</View>
				</BlurView>
			</Modal>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	modal: {
		backgroundColor: "transparent",
	},
	modalHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	blurView: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 16,
	},
	container: {
		backgroundColor: colors.black,
		padding: 30,
		borderRadius: 24,
	},
	options: {
		marginTop: 40,
	},
	option: {
		marginBottom: 16,
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors["white-16"],
	},
	selectedOption: {
		width: "100%",
		backgroundColor: "red",
	},
})
