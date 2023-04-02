import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OmegaMenu from "./components/OmegaMenu";
import "./App.scss";

function App() {
	const [state, setState] = useState({
		AppConstants: {
			menuJsPath: "#__next > div > div > div > nav > div > div > div.relative.ml-4.flex.items-center.space-x-4",
			companyTagsContainerJsPath:
				"#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div.flex.h-full.w-full.overflow-y-auto > div > div",
			leaveAReviewHref: "https://su5tvpep9cb.typeform.com/to/XYzBkTXf",
			githubRepoHref: "https://github.com/codedecks-in/Big-Omega-Extension"
		}
	});

	useEffect(() => {
		// window.addEventListener("api-res", (event) => {
		// 	if (event.detail.contentScriptQuery === "getTours") {
		// 		if (event.detail.status === 200) {
		// 			setState((prevState) => ({ ...prevState, savedScreenContent: event.detail.data }));
		// 		}
		// 	}
		// });
	}, []);

	useEffect(() => {
		//this.fetchStyles();

		let theme = document.querySelector("html").dataset.theme;
		let interval = setInterval(() => {
			if (document.body) {
				let btns = document.querySelector(state.AppConstants.menuJsPath);

				let dummyElem = document.createElement("div");
				dummyElem.id = "big-omega-menu-wrapper";

				btns.appendChild(dummyElem);
				ReactDOM.render(<OmegaMenu theme={theme} AppConstants={state.AppConstants} />, dummyElem);

				clearInterval(interval);
			}
		}, 3000);
	}, []);

	// const APICallingLogic = (tourContent) => {
	// 	let reqOptions = {
	// 		method: "DELETE",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		}
	// 	};
	// 	window.dispatchEvent(
	// 		new CustomEvent("api-req", {
	// 			detail: {
	// 				contentScriptQuery: "deleteTour",
	// 				reqOptions: reqOptions,
	// 				url: `${process.env.REACT_APP_BASE_URL}/v1/api/tour?token=` + state.token + "&tourId=" + tourContent.id
	// 			}
	// 		})
	// 	);
	// };

	return <div></div>;
}

export default App;
