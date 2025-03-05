import { Fragment, ReactNode, useState } from "react"
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native"
import { XText } from "./XText"
import { BlurView } from "expo-blur"
import { colors } from "@/constants/Colors"
import { CaretDownIcon, CrossIcon } from "./svgs"

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

	const closeModal = () => {
		setIsVisible(false)
	}
	const selectedOption = options.find(option => option.value === selectedValue)
	return (
		<Fragment>
			<Pressable
				style={styles.selectedOption}
				onPress={() => {
					setIsVisible(true)
				}}>
				<XText>{selectedOption?.label ?? "select option"}</XText>
				<CaretDownIcon />
			</Pressable>
			<Modal visible={isVisible} style={styles.modal} transparent={true}>
				<BlurView tint='extraLight' style={styles.blurView} intensity={20}>
					<View style={styles.container}>
						<View style={styles.modalHeader}>
							<XText>default view</XText>
							<Pressable onPress={closeModal}>
								<CrossIcon />
							</Pressable>
						</View>
						<ScrollView style={styles.options}>
							{options.map(option => {
								const isSelected = option.value === selectedValue
								return (
									<Pressable
										key={option.value}
										style={styles.option}
										onPress={() => {
											setSelectedValue(option.value)
										}}>
										<XText>{option.label}</XText>
										<Radio isActive={isSelected} />
									</Pressable>
								)
							})}
						</ScrollView>
						<View style={styles.footer}>
							<Pressable onPress={closeModal}>
								<XText style={styles.button}>cancel</XText>
							</Pressable>
							<Pressable onPress={closeModal}>
								<XText style={styles.button}>save</XText>
							</Pressable>
						</View>
					</View>
				</BlurView>
			</Modal>
		</Fragment>
	)
}

const Radio = ({ isActive = false }: { isActive?: boolean }) => {
	return (
		<View style={styles.radio}>
			{isActive && <View style={styles.radioInner} />}
		</View>
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	selectedOption: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	radio: {
		height: 30,
		width: 30,
		borderWidth: 2.5,
		borderColor: colors.white,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	radioInner: {
		height: 16,
		width: 16,
		backgroundColor: colors.white,
		borderRadius: 20,
	},
	footer: {
		flexDirection: "row",
		gap: 24,
	},
	button: {
		textDecorationColor: colors.white,
		textDecorationLine: "underline",
	},
})
