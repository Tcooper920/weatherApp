import React from "react";
import "./style.css";

const LowAndHighBlock = (props) => {

	const findMaxNumber = (array) => {
		return (Math.max.apply(Math, array));
	}

	const findMinNumber = (array) => {
		return (Math.min.apply(Math, array));
	}

	const decodeHTMLEntities = (text) => {
		let textArea = document.createElement('textarea');
		textArea.innerHTML = text;
		return textArea.value;
	}

	const units = decodeHTMLEntities(props.units);

	return (
		<div className="minAndMaxWrapper">
			<div className="minContainer">
				<strong>Low:</strong> {findMinNumber(props.yAxisData)}{units}
			</div>
			<div>
				<span className="divider">|</span>
			</div>
			<div className="maxContainer">
				<strong>High:</strong> {findMaxNumber(props.yAxisData)}{units}
			</div>
		</div>
	)
}

export default LowAndHighBlock;