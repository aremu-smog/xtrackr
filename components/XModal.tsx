import { View, Modal, type ModalProps } from "react-native"

type XModalProps = ModalProps
export const XModal = ({ children, ...rest }: XModalProps) => {
	return (
		<Modal transparent={true} visible={false}>
			{children}
		</Modal>
	)
}
