import React, { useState, useEffect } from "react";
import problemToCompanyMatcher from "../resources/company-wise-problem-list";
import ChevronDown from "./ChevronDown";

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
								<div key={company.company + idx} className="companyTagsContainer--tag">
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
		</div>
	);
}

export default CompanyTags;
