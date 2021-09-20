import React, { useState, useEffect } from "react";
import "./assets/App.css";
import Search from "./components/Search";
import Map from "./components/Map";

function App() {
	let caseCountryUrl =
		"https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json";
	const [countryArray, setCountryArray] = useState([]);
	const [activeCountry, setActiveCountry] = useState({});

	async function fetchCountryData() {
		const response = await fetch(caseCountryUrl);
		return await response.json();
	}

	function setInitialData(apiResponse) {
		let countryData = apiResponse.features.map((feature) => {
			return feature.attributes;
		});
		setCountryArray(countryData);
		setActiveCountry(countryData[0]);
	}

	useEffect(() => {
		fetchCountryData().then((data) => {
			setInitialData(data);
		});
	}, []);

	return (
		<>
			<Search
				countries={countryArray}
				setActiveCountry={setActiveCountry}
			/>
			<Map location={activeCountry} />
		</>
	);
}

export default App;
