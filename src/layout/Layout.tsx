import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Footer className={styles.footer} />
			<div className={styles.body}>{children}</div>
		</div>
	);
}
