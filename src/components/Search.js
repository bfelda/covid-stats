import React from "react";

export default function search(props) {
	const onCountryChange = (e) => {
		let countryObj = props.countries.filter(
			(c) => c.Country_Region === e.target.value
		)[0];
		console.log(countryObj);
		props.setActiveCountry(countryObj);
	};

	return (
		<select autoComplete="on" onChange={onCountryChange}>
			{props.countries.map((country) => (
				<option key={country.OBJECTID}>{country.Country_Region}</option>
			))}
		</select>
	);
}
