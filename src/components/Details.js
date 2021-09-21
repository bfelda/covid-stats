import React, { useState } from "react";
import styled from "styled-components";

export default function Details(props) {
	console.log(props.data);
	const DetailsContainer = styled.section`
		color: white;
		font-weight: 500;
		line-height: 1.5;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: -20em;
		text-shadow: 2px 2px #000000;
		flex: 1 1 auto;
		@media (min-width: 768px) {
			font-size: 1.3em;
			font-weight: 700;
			line-height: 2;
		}
		& span {
			font-size: 0.8em;
			margin-left: 30px;
		}
	`;
	return (
		<DetailsContainer>
			<div>
				<h2>{props.data.Country_Region}</h2>
				<ul>
					<li>
						Deaths:{" "}
						{props.data.Deaths &&
							props.data.Deaths.toLocaleString()}
					</li>
					<li>
						Confirmed:{" "}
						{props.data.Confirmed &&
							props.data.Confirmed.toLocaleString()}
					</li>
					<li>
						Mortaliy Rate:{" "}
						{props.data.Mortality_Rate &&
							props.data.Mortality_Rate.toFixed(2)}
					</li>
					<li>
						Incident Rate:{" "}
						{props.data.Incident_Rate &&
							props.data.Incident_Rate.toFixed(2)}
					</li>
				</ul>
				<span>
					Last Updated{" "}
					{new Date(props.data.Last_Update).toLocaleDateString(
						"en-us"
					)}
				</span>
			</div>
		</DetailsContainer>
	);
}
