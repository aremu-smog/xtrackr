import { supabase } from "@/api"
import { useState } from "react"

export const useVerifyNewUser = ({ onSuccess }: { onSuccess: () => void }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<null | {}>(null)
	const [error, setError] = useState<null | {}>(null)
	const verifyOtp = async (token: string, email: string) => {
		setIsLoading(true)

		try {
			const { data, error } = await supabase.auth.verifyOtp({
				token,
				email,
				type: "signup",
			})

			if (data) {
				setData(data)
				onSuccess()
				return
			}

			if (error) {
				setError(error)
			}
		} catch {
		} finally {
			setIsLoading(false)
		}
	}

	return {
		verifyOtp,
		isLoading,
		setIsLoading,
	}
}
