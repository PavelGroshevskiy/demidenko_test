import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface InputFormProps
	extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	createNewUrl: (url: string) => string;
}
