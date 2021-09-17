import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import CountryMap from "./components/CountryMap";

function App() {
	let caseCountryUrl =
		"https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json";
	const [caseCountryData, setCaseCountryData] = useState([]);
	const [countryArray, setCountryArray] = useState([]);
	const [activeCountry, setActiveCountry] = useState({});
	const [query, setQuery] = useState("");

	async function fetchCountryData() {
		const response = await fetch(caseCountryUrl);
		return await response.json();
	}

	function setData(apiResponse) {
		let countryData = apiResponse.features.map((feature) => {
			return feature.attributes;
		});
		console.log(countryData);
		setCountryArray(countryData);
	}

	useEffect(() => {
		fetchCountryData().then((data) => {
			setData(data);
		});
	}, []);

	return (
		<>
			<Search countries={countryArray} />
			<CountryMap />
		</>
	);
}

export default App;
