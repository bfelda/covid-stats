import React from "react";
import styled from "styled-components";

const SearchContainer = styled.section`
	display: flex;
	align-items: center;
	flex: 0 1 auto;
	justify-content: center;
	padding: 20px 0;
	background: rgba(255, 255, 255, 0.2);
	grid-area: search;
`;

export default function search(props) {
	const onCountryChange = (e) => {
		let countryObj = props.countries.filter(
			(c) => c.Country_Region === e.target.value
		)[0];
		console.log(countryObj);
		props.setActiveCountry(countryObj);
	};

	return (
		<SearchContainer>
			<select autoComplete="on" onChange={onCountryChange}>
				{props.countries.map((country) => (
					<option
						selected={props.activeCountry.UID === country.UID}
						key={country.UID}
					>
						{country.Country_Region}
					</option>
				))}
			</select>
		</SearchContainer>
	);
}
