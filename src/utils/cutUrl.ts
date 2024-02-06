import { ALPHA_BET_SIMBOLS } from "../const/AlphaBetSimbols";

function makeRandomString(length: number) {
	let result = "";
	const charactersLength = ALPHA_BET_SIMBOLS.length;
	let counter = 0;
	while (counter < length) {
		result += ALPHA_BET_SIMBOLS.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

export const cutUrl = () => {
	const randomString = makeRandomString(5);
	const randomUrl = `clck.ru/${randomString}`;
	return randomUrl;
};
