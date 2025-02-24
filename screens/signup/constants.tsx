import React, { ReactNode } from "react"
import { SignupComponentProps, SignupStep } from "./signup.type"
import { SignupSetupStep } from "./Signup"
import { SignupVerifyEmail } from "./VerifyEmail"

export const signupSteps: Record<
	SignupStep,
	{
		title: string
		component: (props: SignupComponentProps) => ReactNode
	}
> = {
	signup: {
		title: "sign up to xtrackr",
		component: props => <SignupSetupStep {...props} />,
	},
	"verify-mail": {
		title: "check your email",
		component: props => <SignupVerifyEmail {...props} />,
	},
}
