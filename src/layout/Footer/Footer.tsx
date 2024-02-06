import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import { format } from "date-fns";

const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>Правила сервиса</div>
			<div>API</div>
			<div>QR - генератор</div>
			<div>© {format(new Date(), "yyyy")} ООО «Кликер АПП»</div>
		</footer>
	);
};

export default Footer;
