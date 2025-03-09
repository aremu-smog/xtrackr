import { supabase } from "@/api"
import { useState } from "react"

export const useRegisterUser = ({ onSuccess }: { onSuccess: () => void }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<null | {}>(null)
	const [error, setError] = useState<null | {}>(null)
	const registerUser = async (email: string, password: string) => {
		setIsLoading(true)

		try {
			const { data, error } = await supabase.auth.signUp({ email, password })

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
		registerUser,
		isLoading,
		setIsLoading,
	}
}
