import { useState } from "react"
import { TextInput, StyleSheet, View, TextInputProps } from "react-native"
import { XText } from "../XText"

type InputProps = TextInputProps & { label: string }
export const Input = ({ label, ...rest }: InputProps) => {
	const [value, setValue] = useState("")

	return (
		<View style={styles.wrapper}>
			<XText variant='label'>{label}</XText>
			<TextInput
				style={styles.input}
				value={value}
				{...rest}
				onChange={setValue}
			/>
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
})
