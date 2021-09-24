import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
ReactGA.initialize("G-XXDP3NJT3K");
reportWebVitals(({ id, name, value }) =>
	ReactGA.event({
		action: name,
		category: "Web Vitals",
		label: id,
		nonInteraction: true,
		value: Math.round(name === "CLS" ? value * 1000 : value),
	})
);

//https://analytics.google.com/analytics/web/?authuser=0#/p287344172/reports/reportinghub
