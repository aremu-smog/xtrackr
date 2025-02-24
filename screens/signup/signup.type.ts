import { Dispatch, SetStateAction } from "react"

export type SignupStep = "signup" | "verify-mail"

export type SignupComponentProps = {
	setStep: Dispatch<SetStateAction<SignupStep>>
}
