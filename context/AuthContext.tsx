import { supabase } from "@/api"
import { Session } from "@supabase/supabase-js"
import { useRouter } from "expo-router"
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"

type SessionState = Session | null
const AuthContext = createContext<{ session: SessionState } | null>(null)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [session, setSession] = useState<SessionState>(null)

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === "SIGNED_OUT") {
				setSession(null)
			} else if (session) {
				setSession(session)
			}
		})
	}, [])
	return (
		<AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		throw Error("authContext must be a child of <AuthContextProvider />")
	}

	return authContext
}
