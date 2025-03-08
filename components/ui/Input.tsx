import { ReactNode, useState } from "react"
import { TextInput, StyleSheet, View, TextInputProps } from "react-native"
import { XText } from "../XText"
import { colors } from "@/constants/Colors"

type InputProps = TextInputProps & { label: string; icon?: ReactNode }
export const Input = ({ label, icon, ...rest }: InputProps) => {
	const [value, setValue] = useState("")
	const [isFocused, setIsFocused] = useState(false)

	return (
		<View style={styles.wrapper}>
			<XText variant='label'>{label}</XText>
			<View>
				<TextInput
					onFocus={() => {
						setIsFocused(true)
					}}
					onBlur={() => {
						setIsFocused(false)
					}}
					style={[styles.input, isFocused && styles.focus]}
					value={value}
					{...rest}
					onChangeText={setValue}
				/>
				{icon && <View style={styles.iconContainer}>{icon}</View>}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: { marginBottom: 16 },
	input: {
		fontFamily: "Manrope",
		fontSize: 40,
		color: "#FFFFFFA3",
		borderBottomWidth: 1,
		fontWeight: 300,
		borderBottomColor: "#FFFFFF29",
		marginTop: -8,
	},
	focus: {
		borderBottomColor: colors.white,
	},
	inputWrapper: {
		position: "relative",
	},
	iconContainer: {
		position: "absolute",
		right: 0,
		bottom: 0,
		height: "100%",
	},
})
