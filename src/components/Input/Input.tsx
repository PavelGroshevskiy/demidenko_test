import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";

import cn from "classnames";

export const Input = ({ className, ...props }: InputProps) => {
	return <input className={cn(className, styles.input)} {...props} />;
};
