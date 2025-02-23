import { colors } from "@/constants/Colors"
import { Text, type TextProps, StyleSheet } from "react-native"

type TextVariant = "header" | "title" | "body" | "label"
export type XTextProps = TextProps & {
	variant?: TextVariant
}

export function XText({ variant = "header", style, ...rest }: XTextProps) {
	return (
		<Text style={[styles.default, styleWithType[variant], style]} {...rest} />
	)
}

const styles = StyleSheet.create({
	default: {
		color: colors.white,
		fontFamily: "Manrope",
		fontWeight: 300,
	},

	header: {
		fontSize: 40,
		lineHeight: 48,
	},
	title: {
		fontSize: 20,
	},
	body: {
		lineHeight: 24,
		fontSize: 16,
	},
	label: {
		lineHeight: 16,
		fontSize: 12,
		letterSpacing: 1.92,
		textTransform: "uppercase",
		color: "#FFFFFF66",
	},
})

const styleWithType: Record<TextVariant, Record<string, string | number>> = {
	header: styles.header,
	body: styles.body,
	title: styles.title,
	label: styles.label,
}
