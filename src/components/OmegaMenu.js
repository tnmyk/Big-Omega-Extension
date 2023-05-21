import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Toggle from "react-toggle";
import BigOmegaLogo from "./BigOmegaLogo";
import CompanyTags from "./CompanyTags";
import CodeAnalyse from "./CodeAnalyse";
import LinkImage from "./LinkImage";
import GithubLogo from "./GithubLogo";

const constants = {
	COMPANY_TAGS: "big-omega-company-tags",
	PROBLEM_TIMER: "big-omega-problem-timer"
};

function OmegaMenu(props) {
	const [state, setState] = useState({
		enableCompanyTags: true,
		enableProblemTimer: false,

		isMenuOpen: props.isMenuOpen,
		menuOptions: [
			{ name: "Company Tags", enabled: true }
			//{ name: "Code Analyser", enabled: false } // Future feature
		],
		menuLinks: [
			{ name: "Contribute with us", href: props.AppConstants.githubRepoHref, icon: GithubLogo },
			{ name: "Leave a review", href: props.AppConstants.leaveAReviewHref, icon: LinkImage },
			{ name: "Become exclusive member", href: props.AppConstants.substack, icon: LinkImage }
		],
		enabledOptions: [],
		theme: props.theme
	});

	useEffect(() => {
		setState((prevState) => ({
			...prevState,
			theme: props.theme
		}));
	}, [props.theme]);

	/**
	 * Common useEffect
	 */
	useEffect(() => {
		handleToggleCompanyTags(state.enableCompanyTags);
	}, [props.problemSlug]);

	const handleToggleMenu = (flag) => {
		setState((prevState) => ({ ...prevState, isMenuOpen: flag || !prevState.isMenuOpen }));
	};

	const handleToggleCompanyTags = (flag) => {
		let companyTagsElem = document.querySelectorAll("#" + constants.COMPANY_TAGS);
		if (companyTagsElem.length > 0) {
			Array.from(companyTagsElem).forEach((elem) => elem.remove());
		}
		if (flag) {
			let newElem = document.createElement("div");
			newElem.id = constants.COMPANY_TAGS;
			document.querySelector(props.AppConstants.companyTagsContainerJsPath).prepend(newElem);
			const root = ReactDOM.createRoot(newElem);

			root.render(
				<CompanyTags isOldVersion={props.isOldVersion} problemSlug={props.problemSlug} theme={state.theme} />,
				newElem
			);
		}
	};

	const handleToggleCodeAnalyser = (flag) => {
		let codeAnalyseElem = document.querySelectorAll("#" + constants.PROBLEM_TIMER);
		if (codeAnalyseElem.length > 0) {
			Array.from(codeAnalyseElem).forEach((elem) => elem.remove());
		}

		if (flag) {
			let newElem = document.createElement("div");
			newElem.id = constants.PROBLEM_TIMER;
			document.body.prepend(newElem);
			const root = ReactDOM.createRoot(newElem);

			root.render(<CodeAnalyse theme={state.theme} />, newElem);
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
				handleToggleCodeAnalyser(opt.enabled);
			}
		});

		setState((prevState) => ({ ...prevState, menuOptions: opts }));
	};

	const handleMenuNavigation = (href) => {
		window.open(href, "_blank").focus();
	};

	return (
		<div
			className="dark:hover:bg-dark-fill-3 omega-menu"
			id="big-omega-menu"
			onMouseEnter={() => handleToggleMenu(true)}
			onMouseLeave={() => handleToggleMenu(false)}
		>
			<div className="omega-menu--icon" onClick={handleToggleMenu}>
				<BigOmegaLogo theme={state.theme} />
			</div>
			{state.isMenuOpen && (
				<div
					className="omega-menu--list"
					style={{
						background: props.theme === "dark" ? "#515151" : "#f8f8ff",
						color: props.theme === "dark" ? "white" : "#515151",
						border: props.theme !== "dark" ? "1px solid rgb(64, 135, 241)" : "",
						zIndex: 1
					}}
				>
					{state.menuOptions.map((option, idx) => (
						<div onClick={() => handleToggleOption(idx)} className="omega-menu--listItem">
							<div className="omega-menu--optionName">{option.name}</div>
							<Toggle defaultChecked={option.enabled} icons={false} onChange={(eve) => handleToggleOption(eve, idx)} />
						</div>
					))}

					<div className="omega-menu--seperator"></div>
					{state.menuLinks.map((option, idx) => (
						<div onClick={() => handleMenuNavigation(option.href)} className="omega-menu--externalLink">
							<div>
								<option.icon theme={state.theme} />
							</div>{" "}
							<div>{option.name}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default OmegaMenu;
