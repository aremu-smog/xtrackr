import { RowItem } from "@/components/Row"

type StatsItem = RowItem[]
export const statistics: StatsItem[] = [
	[
		{
			title: "23 subscriptions",
			description: "number of active subscriptions",
			id: "active-subscriptions",
		},
	],
	[
		{
			title: "4",
			description: "subscriptions",
			id: "monthly-subscriptions",
		},
		{
			title: "$2,500",
			description: "monthly payment",
			id: "monthly-payment",
		},
	],
	[
		{
			title: "$12,500",
			description: "yearly payment",
			id: "yearly-payment",
		},
		{
			title: "13",
			description: "subscriptions",
			id: "yearly-subscriptions",
		},
	],
	[
		{
			title: "$1028",
			description: "most expensive subscription (linkedin)",
			id: "most-expensive-sub",
		},
	],
]
