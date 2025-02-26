import { ImageSourcePropType } from "react-native"

interface TabItem {
	name: string
	activeIcon: ImageSourcePropType
	icon: ImageSourcePropType
}

export const tabs: TabItem[] = [
	{
		name: "index",
		activeIcon: require("@/assets/images/tab/insights-active.png"),
		icon: require("@/assets/images/tab/insights.png"),
	},
	{
		name: "grid",
		activeIcon: require("@/assets/images/tab/grid-active.png"),
		icon: require("@/assets/images/tab/grid.png"),
	},
	{
		name: "list",
		activeIcon: require("@/assets/images/tab/list-active.png"),
		icon: require("@/assets/images/tab/list.png"),
	},
	{
		name: "settings",
		activeIcon: require("@/assets/images/tab/settings-active.png"),
		icon: require("@/assets/images/tab/settings.png"),
	},
]
