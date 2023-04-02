import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Toggle from "react-toggle";
import CloseButton from "./CloseButton";
import CompanyTags from "./CompanyTags";
import ProblemTimer from "./ProblemTimer";

const constants = {
	COMPANY_TAGS: "big-omega-company-tags",
	PROBLEM_TIMER: "big-omega-problem-timer"
};

function OmegaMenu(props) {
	const [state, setState] = useState({
		enableCompanyTags: false,
		enableProblemTimer: false,

		isMenuOpen: true,
		menuOptions: [
			{ name: "Company Tags", enabled: true }
			//{ name: "Problem Timer", enabled: false }
		],
		enabledOptions: []
	});

	/**
	 * Common useEffect
	 */
	useEffect(() => {
		// window.addEventListener("click", (event) => {
		// 	console.log("click event - ", event);
		// 	event.stopPropagation();
		// 	if (event.target.id !== "big-omega-menu") {
		// 		setState((prevState) => ({ ...prevState, isMenuOpen: false }));
		// 	}
		// });
		handleToggleCompanyTags(true);
	}, []);

	const handleToggleMenu = () => {
		setState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }));
	};

	const handleToggleCompanyTags = (flag) => {
		let companyTagsElem = document.querySelectorAll("#" + constants.COMPANY_TAGS);
		if (companyTagsElem.length > 0) {
			Array.from(companyTagsElem).forEach((elem) => elem.remove());
		}
		if (flag) {
			let newElem = document.createElement("div");
			newElem.id = constants.COMPANY_TAGS;
			document.body.prepend(newElem);
			const root = ReactDOM.createRoot(newElem);

			let theme = document.querySelector("html").dataset.theme;
			root.render(<CompanyTags theme={theme} />, newElem);
		}
	};

	const handleToggleProblemTimer = (flag) => {
		let problemTimerElem = document.querySelectorAll("#" + constants.PROBLEM_TIMER);
		if (problemTimerElem.length > 0) {
			Array.from(problemTimerElem).forEach((elem) => elem.remove());
		}

		if (flag) {
			let newElem = document.createElement("div");
			newElem.id = constants.PROBLEM_TIMER;
			document.body.prepend(newElem);
			const root = ReactDOM.createRoot(newElem);

			let theme = document.querySelector("html").dataset.theme;
			root.render(<ProblemTimer theme={theme} />, newElem);
		}
	};

	const handleToggleOption = (eve, index) => {
		let opts = state.menuOptions;
		opts.forEach((opt, idx) => {
			if (idx === index) {
				opt.enabled = eve.target.checked;
			}
		});

		opts.forEach((opt, idx) => {
			if (idx === 0) {
				handleToggleCompanyTags(opt.enabled);
			}

			if (idx === 1) {
				handleToggleProblemTimer(opt.enabled);
			}
		});

		setState((prevState) => ({ ...prevState, menuOptions: opts }));
	};

	return (
		<div className="dark:hover:bg-dark-fill-3 omega-menu" id="big-omega-menu">
			<div className="omega-menu--icon" onClick={handleToggleMenu}>
				{state.isMenuOpen && <CloseButton />}
				{!state.isMenuOpen && "Ω"}
			</div>
			{state.isMenuOpen && (
				<div
					className="omega-menu--list"
					style={{
						background: props.theme === "dark" ? "#515151" : "#f8f8ff",
						color: props.theme === "dark" ? "white" : "#515151",
						border: props.theme !== "dark" ? "1px solid rgb(64, 135, 241)" : ""
					}}
				>
					{state.menuOptions.map((option, idx) => (
						<div onClick={() => handleToggleOption(idx)} className="omega-menu--listItem">
							<div className="omega-menu--optionName">{option.name}</div>
							<Toggle defaultChecked={option.enabled} icons={false} onChange={(eve) => handleToggleOption(eve, idx)} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default OmegaMenu;
