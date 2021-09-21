import React from "react";
import styled from "styled-components";

export default function search(props) {
	const onCountryChange = (e) => {
		let countryObj = props.countries.filter(
			(c) => c.Country_Region === e.target.value
		)[0];
		console.log(countryObj);
		props.setActiveCountry(countryObj);
	};

	const SearchContainer = styled.section`
		width 100vw;
		padding: 20px 0;
		display: flex;
		align-items: center;
		flex: 0 1 auto;
		justify-content: center;
		background: rgba(255,255,255,0.3);
	`;

	const SearchInput = styled.select`
	font-size: 14px;
	border: none;
	appearance: none;
	border-radius: 3px;
	padding 12px;
	`;

	return (
		<SearchContainer>
			<SearchInput autoComplete="on" onChange={onCountryChange}>
				{props.countries.map((country) => (
					<option
						selected={props.activeCountry.UID === country.UID}
						key={country.UID}
					>
						{country.Country_Region}
					</option>
				))}
			</SearchInput>
		</SearchContainer>
	);
}
