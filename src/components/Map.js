import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import mapStyle from "../map_styles/style1";

export default function Map(props) {
	const [location, setLocation] = useState({});

	const options = {
		styles: mapStyle,
		disableDefaultUI: true,
		backgroundColor: "#24282b",
	};

	const mapContainerStyle = {
		width: "100vw",
		height: "100vh",
	};

	const center = {
		lat: location.lat,
		lng: location.lng,
	};

	useEffect(() => {
		if (!props.location.OBJECTID) return;
		let newLocation = {
			lat: props.location.Lat,
			lng: props.location.Long_,
			zoom: 5,
		};
		setLocation(newLocation);
	}, [props.location]);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
	});

	if (loadError) return "Error loading google maps";
	if (!isLoaded) return "Loading...";

	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={location.zoom}
				center={center}
				options={options}
			></GoogleMap>
		</div>
	);
}
