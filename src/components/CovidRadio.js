import React from "react";
import styled from "styled-components";

const CovidRadioInput = styled.div`
	padding: 5px;
	& input,
	label {
		cursor: pointer;
	}
`;

const Divider = styled.hr`
	border: solid 1px black;
`;

const isChecked = (activeKey, key) => {
	return activeKey === key;
};

export default function CovidRadio(props) {
	return (
		<>
			{Object.keys(props.options).map((key, index) => {
				return (
					<CovidRadioInput key={key + index}>
						<input
							onChange={props.onChange}
							id={props.options[key] + index}
							checked={isChecked(
								props.active,
								props.options[key]
							)}
							type="radio"
							value={props.options[key]}
							name={props.name}
						/>{" "}
						<label htmlFor={props.options[key] + index}>
							{props.options[key]}
						</label>
					</CovidRadioInput>
				);
			})}
			<Divider />
		</>
	);
}
