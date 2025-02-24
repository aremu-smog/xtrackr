import { colors } from "@/constants/Colors"
import { LinearGradient } from "expo-linear-gradient"
import { ReactNode } from "react"
import { View, StyleSheet } from "react-native"

export const TabSymbol = ({
	focused,
	children,
}: {
	focused: Boolean
	children: ReactNode
}) => {
	return (
		<View style={styles.iconWrapper}>
			<LinearGradient
				style={styles.overlay}
				colors={["#04030F00", colors.black]}
			/>
			{children}
			{focused && (
				<View style={styles.bgWrapper}>
					<LinearGradient
						colors={["#100C3B", colors.black]}
						style={styles.iconBg}
					/>
					<View style={styles.iconBg2} />
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	iconWrapper: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	overlay: {
		position: "absolute",
		zIndex: 1,
		height: "100%",
		width: "100%",
		opacity: 0.8,
	},
	bgWrapper: {
		position: "absolute",
		width: "100%",
		left: 0,
		top: -3,
		height: "110%",
		zIndex: -1,
		flexDirection: "row",
	},
	iconBg: {
		height: "100%",
		flex: 0.5,
		borderTopColor: "#8060FE",
		borderTopWidth: 1,
	},
	iconBg2: {
		height: "100%",
		flex: 0.5,
		borderTopColor: "#201888",
		borderTopWidth: 1,
	},
})
