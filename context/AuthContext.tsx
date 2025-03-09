import { createContext, ReactNode, useContext } from "react"

const AuthContext = createContext(null)

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		throw Error("authContext must be a child of <AuthContextProvider />")
	}

	return authContext
}
