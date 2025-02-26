import { colors } from "@/constants/Colors"
import { BlurView } from "expo-blur"
import { Fragment, ReactNode } from "react"
import { Text, type TextProps, StyleSheet, View } from "react-native"

type TextVariant = "header" | "title" | "body" | "label"
export type XTextProps = TextProps & {
	variant?: TextVariant
	blurred?: Boolean
}

export function XText({
	variant = "header",
	blurred = false,
	style,
	...rest
}: XTextProps) {
	const Wrapper = blurred ? TextBlur : Fragment
	return (
		<Wrapper>
			<Text style={[styles.default, styleWithType[variant], style]} {...rest} />
		</Wrapper>
	)
}

const TextBlur = ({ children }: { children: ReactNode }) => {
	return (
		<View style={{ position: "relative" }}>
			{children}
			<BlurView
				intensity={4}
				style={{
					backgroundColor: "transparent",
					position: "absolute",
					left: 0,
					top: 0,
					height: "100%",
					width: "100%",
				}}
			/>
		</View>
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
