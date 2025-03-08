import { DarkTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { Fragment, useEffect } from "react"
import "react-native-reanimated"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		Manrope: require("../assets/fonts/Manrope-Light.ttf"),
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<ThemeProvider value={DarkTheme}>
			<Fragment>
				<Stack>
					<Stack.Screen name='index' options={{ headerShown: false }} />
					<Stack.Screen
						name='(modal)'
						options={{
							headerShown: false,
							presentation: "transparentModal",
							animation: "fade",
						}}
					/>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen name='+not-found' />
					<Stack.Screen
						name='new-subscription'
						options={{ headerShown: false }}
					/>
				</Stack>

				<StatusBar style='light' />
			</Fragment>
		</ThemeProvider>
	)
}
{
}
