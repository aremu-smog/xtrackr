import { Slot, Tabs, useRouter } from "expo-router"
import React, { Fragment, useEffect } from "react"
import { Image, StyleSheet, Platform } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { colors, Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { TabSymbol } from "@/components/ui/TabSymbol"
import { tabs } from "@/constants/tabs"
import { useAuthContext } from "@/context"

export default function TabLayout() {
	const colorScheme = useColorScheme()

	const { session } = useAuthContext()
	const router = useRouter()
	useEffect(() => {
		if (!session) {
			router.dismissAll()
			router.replace("/")
		}
	}, [session])
	return (
		<Fragment>
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
		</Fragment>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 40,
		height: 40,
		opacity: 0.8,
	},
})
