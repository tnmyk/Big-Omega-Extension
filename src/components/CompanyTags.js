import React, { useState, useEffect } from "react";
import problemToCompanyMatcher from "../resources/company-wise-problem-list";
import ChevronDown from "./ChevronDown";
import LinkImage from "./LinkImage";
import OpenInNewTab from "./OpenInNewTab";

function CompanyTags(props) {
	const [state, setState] = useState({
		companies: [],
		isExpanded: false,
		theme: props.theme,
		isTagsContainerScrollable: false
	});

	useEffect(() => {
		let host = window.location.host;
		// props.problemSlug === e.g. /problems/flip-string-to-monotone-increasing/
		setState((prevState) => ({
			...prevState,
			companies: problemToCompanyMatcher[host][props.problemSlug] || []
		}));
	}, [props.problemSlug]);

	const toggleExpansion = () => {
		setState((prevState) => ({ ...prevState, isExpanded: !prevState.isExpanded }));
	};

	const handleShowProblemList = (flag, company) => {
		if (props.isOldVersion) {
			return;
		}

		if (flag) {
			let problemList = [];
			let host = window.location.host;
			let matchObj = problemToCompanyMatcher[host];
			Object.entries(matchObj).forEach((problem) => {
				problem[1].forEach((companyObj) => {
					if (companyObj.company === company) {
						problemList = [...problemList, problem[0]];
					}
				});
			});

			setState((prevState) => ({
				...prevState,
				showProblemList: flag,
				problemList: problemList,
				whichCompanyTagClicked: company
			}));
		}

		if (!flag) {
			setState((prevState) => ({ ...prevState, showProblemList: flag, problemList: [], whichCompanyTagClicked: null }));
		}
	};

	const handleProblemLinkClick = (problem) => {
		window.open("https://" + window.location.host + "/problems/" + problem, "_blank");
	};

	return (
		<div id="big-omega-topbar">
			<>
				<div
					className="companyTagsContainer"
					style={{
						overflowX: state.isExpanded ? "hidden" : "scroll",
						flexWrap: state.isExpanded ? "wrap" : "nowrap"
					}}
				>
					{state.companies.length === 0 && (
						<div className="companyTagsContainer--tag">No companies found for this problem</div>
					)}
					{state.companies.length > 0 &&
						state.companies.map((company, idx) => {
							return (
								<div
									onClick={() => handleShowProblemList(true, company.company)}
									key={company.company + idx}
									style={{ backgroundColor: state.theme === "light" ? "#000a200d" : null }}
									className="companyTagsContainer--tag"
								>
									<div>{company.company}</div>
									<div className="companyTagsContainer--tagOccurence">{company.num_occur}</div>
								</div>
							);
						})}
				</div>
				<div className="companyTagsContainer--chevron" onClick={toggleExpansion}>
					<div style={{ transform: state.isExpanded ? "rotate(180deg)" : "" }}>
						<ChevronDown theme={state.theme} style={{ transform: state.isExpanded ? "rotate(180deg)" : "" }} />
					</div>
				</div>
			</>

			{state.showProblemList && !props.isOldVersion && (
				<div aria-modal="true" role="dialog" class="fixed inset-0 overflow-y-auto z-modal">
					<div class="flex min-h-screen items-center justify-center px-4">
						<div class="opacity-100">
							<div
								aria-hidden="true"
								class="fixed inset-0 bg-gray-8 opacity-60"
								onClick={() => handleShowProblemList(false)}
							></div>
						</div>
						<div class="my-8 inline-block transform overflow-hidden rounded-[13px] p-5 text-left transition-all md:min-w-[420px] shadow-level4 dark:shadow-dark-level4 absolute top-[calc(50vh_-_300px)] mx-4 min-w-[calc(100vw-_30px)] px-0 py-4 lc-md:w-[600px] bg-layer-2 dark:bg-dark-layer-2 opacity-100 scale-100">
							<div class="flex justify-between pb-4 pl-6 pr-5">
								<h3 class="text-lg font-medium">
									<div class="text-lg">
										{state.whichCompanyTagClicked} - {state.problemList.length} problems found
									</div>
								</h3>
								<button
									onClick={() => handleShowProblemList(false)}
									class="cursor-pointer rounded transition-all hover:bg-fill-3 dark:hover:bg-dark-fill-3"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="1em"
										height="1em"
										fill="currentColor"
										class="h-6 w-6 text-gray-6 dark:text-dark-gray-6"
									>
										<path
											fill-rule="evenodd"
											d="M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</div>
							<div className="problemList">
								{state.problemList.map((problem) => {
									return (
										<div className="problemList-problem" onClick={() => handleProblemLinkClick(problem)}>
											{problem}{" "}
											<span className="active-inactive">
												<OpenInNewTab theme={state.theme} />
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CompanyTags;
