import React, { SyntheticEvent } from "react";
import styles from "./InputForm.module.scss";
import { InputFormProps } from "./InputForm.props";

import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { cutUrl } from "../../utils/cutUrl";

export const InputForm = ({ className, createNewUrl, ...props }: InputFormProps) => {
	const [inputValue, setInputValue] = React.useState("");
	const [disable, setDisable] = React.useState(true);

	const handleInputChange = (e: SyntheticEvent) => {
		e.preventDefault();
		let target = e.target as HTMLInputElement;
		setInputValue(target.value);

		target.value.length > 0 ? setDisable(false) : setDisable(true);
	};

	const handleGenerateUrl = (e: SyntheticEvent) => {
		e.preventDefault();
		let cuttedUrl = cutUrl();
		createNewUrl(cuttedUrl);
	};

	return (
		<form className={cn(className, styles.inputForm)} {...props} action="">
			<Input
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Введите ссылку которую нужно сократить"
			/>
			<Button onClick={handleGenerateUrl} appearance="ghost" disabled={disable}>
				Сократить
			</Button>
		</form>
	);
};
