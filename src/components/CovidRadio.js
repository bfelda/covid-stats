import React from "react";
import styled from "styled-components";

const CovidRadioInput = styled.div`
	padding: 5px;
	label {
		cursor: pointer;
		& > input[type="radio"] {
			display: none;
		}
		& > input[type="radio"] + *::before {
			content: "";
			display: inline-block;
			vertical-align: bottom;
			width: 1rem;
			height: 1rem;
			margin-right: 0.3rem;
			border-radius: 50%;
			border-style: solid;
			border-width: 0.1rem;
			border-color: #c94b27;
		}
		& > input[type="radio"]:checked + *::before {
			background: radial-gradient(
				#c94b27 0%,
				#c94b27 40%,
				transparent 50%,
				transparent
			);
			border-color: #c94b27;
		}
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
						<label htmlFor={props.options[key] + index}>
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
							<span>{props.options[key]}</span>
						</label>
					</CovidRadioInput>
				);
			})}
			<Divider />
		</>
	);
}
