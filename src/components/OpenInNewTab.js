import React from "react";

function OpenInNewTab(props) {
	return (
		<svg
			style={{
				fill: props.theme === "light" ? "black" : "wheat"
			}}
			id="icon"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
		>
			<path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z" />
			<polygon points="20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2" />
			<rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" width="32" height="32" />
		</svg>
	);
}

export default OpenInNewTab;
