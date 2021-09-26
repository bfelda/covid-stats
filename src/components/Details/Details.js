import React, { useState } from "react";
import styled from "styled-components";

/*
props:
	data, active country data
*/
const DetailsContainer = styled.section`
	color: white;
	font-weight: 500;
	line-height: 1.5;
	font-size: 1.1em;
	grid-area: details;
	text-shadow: 2px 2px #000000;
	display: flex;
	@media (max-width: 868px) {
		align-items: center;
		padding-left: 40px;
	}
	@media (min-width: 868px) {
		justify-content: center;
		background: rgba(255, 255, 255, 0.2);
		font-size: 1.3em;
		font-weight: 700;
		line-height: 2;
	}
	& span {
		font-size: 0.8em;
		margin-left: 30px;
	}
`;

export default function Details(props) {
	const [phone, setPhone] = useState("");

	const sendSMS = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/", {
				method: "post",
				headers: {
					"Content-type":
						"application/x-www-form-urlencoded; charset=UTF-8",
				},
				body: phone,
			});
			if (response.status === 200) {
				console.log("success!!!!!!!!!!!!!!!!!");
			} else {
				console.log("Error!!!!!!!!!!!!!!!!!!!");
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};

	return (
		<DetailsContainer>
			<div>
				<h2>{props.data.Country_Region}</h2>
				<ul>
					<li>Deaths: {props.data.Deaths.toLocaleString()}</li>
					<li>Confirmed: {props.data.Confirmed.toLocaleString()}</li>
					<li>
						Mortality Rate: {props.data.Mortality_Rate.toFixed(2)}
					</li>
					<li>
						Incident Rate: {props.data.Incident_Rate.toFixed(2)}
					</li>
				</ul>
				<span>
					Last Updated
					{new Date(props.data.Last_Update).toLocaleDateString(
						"en-us"
					)}
				</span>
				<form name="notify" data-netlify="true" method="POST">
					<input
						onChange={handlePhoneChange}
						type="text"
						placeholder="phone #"
					></input>
					<button type="submit">Send</button>
				</form>
			</div>
		</DetailsContainer>
	);
}
