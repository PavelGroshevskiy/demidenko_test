import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface ModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	open: boolean;
	children: React.ReactNode;
}
