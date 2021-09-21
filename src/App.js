import React, { useState, useEffect } from "react";
import "./assets/App.css";
import Search from "./components/Search";
import Map from "./components/Map";
import Ref from "./components/Ref";
import Details from "./components/Details";
import styled from "styled-components";

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
		let countryData = apiResponse.features.map(
			(feature) => feature.attributes
		);
		// let sortedCountryData = countryData.sort((a, b) => a.Deaths > b.Deaths);
		// console.log(sortedCountryData);
		setCountryArray(countryData);
		setActiveCountry(countryData[0]);
	}

	useEffect(() => {
		fetchCountryData().then((data) => {
			setInitialData(data);
		});
	}, []);

	const OverlayContainer = styled.section`
		position: absolute;
		top: 0;
		z-index: 2;
		display: flex;
		flex-flow: column;
		height: 100vh;
	`;

	return (
		<>
			<Map location={activeCountry} />
			<OverlayContainer>
				<Search
					countries={countryArray}
					activeCountry={activeCountry}
					setActiveCountry={setActiveCountry}
				/>
				<Details data={activeCountry} />
				<Ref countries={countryArray} />
			</OverlayContainer>
		</>
	);
}

export default App;
