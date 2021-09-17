import React from "react";
import { loadCss, loadModules } from "esri-loader";
import { Map } from "@esri/react-arcgis";

export default function CountryMap(props) {
	loadCss();
	return (
		<Map
			className="full-screen-map"
			mapProperties={{ basemap: "satellite" }}
		/>
	);
}
