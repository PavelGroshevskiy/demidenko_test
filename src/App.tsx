import React, { SyntheticEvent } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { InputForm } from "./components/InputForm/InputForm";
import { Modal } from "./components/Modal/Modal";
import { Layout } from "./layout/Layout";
import { cutUrl } from "./utils/cutUrl";

function App() {
	const [open, setOpen] = React.useState(false);
	const [url, setUrl] = React.useState("");

	const handleCreateModalUrl = (url: string) => {
		setUrl(url);
		setOpen(true);
		return url;
	};

	React.useEffect(() => {}, []);

	return (
		<div className="App">
			<Layout>
				<div className="App">
					Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой
					ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.
				</div>
				<InputForm createNewUrl={handleCreateModalUrl} />
				<Modal open={open}>
					<a href={url}>{url}</a>
				</Modal>
			</Layout>
		</div>
	);
}

export default App;
