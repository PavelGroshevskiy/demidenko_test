import React from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.props";

import cn from "classnames";

export const Modal = ({ open, children, className, ...props }: ModalProps) => {
	return (
		<div
			className={cn(className, styles.Modal, {
				[styles.modalOpen]: open === true,
			})}
			{...props}
		>
			<div className={styles.content}>{children}</div>
		</div>
	);
};
