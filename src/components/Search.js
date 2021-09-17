import React from "react";

export default function search(props) {
	return (
		<select autoComplete="on">
			{props.countries.map((country) => (
				<option key={country.OBJECTID}>{country.Country_Region}</option>
			))}
		</select>
	);
}
