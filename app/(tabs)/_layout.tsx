import { Tabs } from "expo-router"
import React from "react"
import { Image, ImageSourcePropType, Platform, StyleSheet } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { colors, Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { TabSymbol } from "@/components/ui/TabSymbol"
import { tabs } from "@/constants/tabs"

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarActiveBackgroundColor: colors.black,
				tabBarInactiveBackgroundColor: colors.black,
				tabBarLabel: () => null,
				tabBarIconStyle: {
					height: "100%",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					marginTop: -2,
				},

				tabBarStyle: [
					{ height: 100, backgroundColor: colors.black, paddingTop: 0 },
					Platform.select({
						ios: {
							// Use a transparent background on iOS to show the blur effect
							position: "absolute",
						},
						default: {},
					}),
				],
			}}>
			{tabs.map(tab => {
				return (
					<Tabs.Screen
						key={`tab-${tab.name}`}
						name={tab.name}
						options={{
							tabBarIcon: ({ color, focused }) => (
								<TabSymbol focused={focused}>
									<Image
										style={styles.icon}
										source={focused ? tab.activeIcon : tab.icon}
									/>
								</TabSymbol>
							),
						}}
					/>
				)
			})}
		</Tabs>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 40,
		height: 40,
		opacity: 0.8,
	},
})
