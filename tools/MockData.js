import React from "react";

const Countries = [
	{
		OBJECTID: 1,
		Country_Region: "Afghanistan",
		Last_Update: 1632514912000,
		Lat: 33.93911,
		Long_: 67.709953,
		Confirmed: 154960,
		Deaths: 7199,
		Recovered: null,
		Active: null,
		Incident_Rate: 398.064741572213,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 4.6457150232318,
		UID: 4,
		ISO3: "AFG",
	},
	{
		OBJECTID: 2,
		Country_Region: "Albania",
		Last_Update: 1632514912000,
		Lat: 41.1533,
		Long_: 20.1683,
		Confirmed: 166690,
		Deaths: 2619,
		Recovered: null,
		Active: null,
		Incident_Rate: 5792.27187434846,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 1.57118003479513,
		UID: 8,
		ISO3: "ALB",
	},
	{
		OBJECTID: 3,
		Country_Region: "Algeria",
		Last_Update: 1632514912000,
		Lat: 28.0339,
		Long_: 1.6596,
		Confirmed: 202283,
		Deaths: 5748,
		Recovered: null,
		Active: null,
		Incident_Rate: 461.29575526858,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 2.84156355205331,
		UID: 12,
		ISO3: "DZA",
	},
	{
		OBJECTID: 4,
		Country_Region: "Andorra",
		Last_Update: 1632514912000,
		Lat: 42.5063,
		Long_: 1.5218,
		Confirmed: 15167,
		Deaths: 130,
		Recovered: null,
		Active: null,
		Incident_Rate: 19629.8453374749,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 0.857124019252324,
		UID: 20,
		ISO3: "AND",
	},
	{
		OBJECTID: 5,
		Country_Region: "Angola",
		Last_Update: 1632514912000,
		Lat: -11.2027,
		Long_: 17.8739,
		Confirmed: 53840,
		Deaths: 1460,
		Recovered: null,
		Active: null,
		Incident_Rate: 163.815374474522,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 2.71173848439822,
		UID: 24,
		ISO3: "AGO",
	},
	{
		OBJECTID: 6,
		Country_Region: "Antigua and Barbuda",
		Last_Update: 1632514912000,
		Lat: 17.0608,
		Long_: -61.7964,
		Confirmed: 2815,
		Deaths: 63,
		Recovered: null,
		Active: null,
		Incident_Rate: 2874.5609018871,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 2.23801065719361,
		UID: 28,
		ISO3: "ATG",
	},
	{
		OBJECTID: 7,
		Country_Region: "Argentina",
		Last_Update: 1632514912000,
		Lat: -38.4161,
		Long_: -63.6167,
		Confirmed: 5246998,
		Deaths: 114772,
		Recovered: null,
		Active: null,
		Incident_Rate: 11609.4873200211,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 2.18738410039417,
		UID: 32,
		ISO3: "ARG",
	},
	{
		OBJECTID: 8,
		Country_Region: "Armenia",
		Last_Update: 1632514912000,
		Lat: 40.0691,
		Long_: 45.0382,
		Confirmed: 256554,
		Deaths: 5216,
		Recovered: null,
		Active: null,
		Incident_Rate: 8657.90551809273,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 2.03310024400321,
		UID: 51,
		ISO3: "ARM",
	},
	{
		OBJECTID: 9,
		Country_Region: "Australia",
		Last_Update: 1632590491000,
		Lat: -25,
		Long_: 133,
		Confirmed: 95807,
		Deaths: 1220,
		Recovered: null,
		Active: null,
		Incident_Rate: 376.308440397962,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 1.27339338461699,
		UID: 36,
		ISO3: "AUS",
	},
	{
		OBJECTID: 10,
		Country_Region: "Austria",
		Last_Update: 1632590491000,
		Lat: 47.5162,
		Long_: 14.5501,
		Confirmed: 734302,
		Deaths: 10961,
		Recovered: null,
		Active: null,
		Incident_Rate: 8153.11334162373,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 1.49271008386195,
		UID: 40,
		ISO3: "AUT",
	},
	{
		OBJECTID: 11,
		Country_Region: "Azerbaijan",
		Last_Update: 1632590491000,
		Lat: 40.1431,
		Long_: 47.5769,
		Confirmed: 479814,
		Deaths: 6433,
		Recovered: null,
		Active: null,
		Incident_Rate: 4732.27851378441,
		People_Tested: null,
		People_Hospitalized: null,
		Mortality_Rate: 1.34072786538117,
		UID: 31,
		ISO3: "AZE",
	},
];

const SampleAPIReturn = {
	objectIdFieldName: "OBJECTID",
	uniqueIdField: {
		name: "OBJECTID",
		isSystemMaintained: true,
	},
	globalIdFieldName: "",
	geometryType: "esriGeometryPoint",
	spatialReference: {
		wkid: 4326,
		latestWkid: 4326,
	},
	fields: [
		{
			name: "OBJECTID",
			type: "esriFieldTypeOID",
			alias: "OBJECTID",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Country_Region",
			type: "esriFieldTypeString",
			alias: "Country/Region",
			sqlType: "sqlTypeOther",
			length: 256,
			domain: null,
			defaultValue: null,
		},
		{
			name: "Last_Update",
			type: "esriFieldTypeDate",
			alias: "Last Update",
			sqlType: "sqlTypeOther",
			length: 8,
			domain: null,
			defaultValue: null,
		},
		{
			name: "Lat",
			type: "esriFieldTypeDouble",
			alias: "Latitude",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Long_",
			type: "esriFieldTypeDouble",
			alias: "Longitude",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Confirmed",
			type: "esriFieldTypeInteger",
			alias: "Confirmed",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Deaths",
			type: "esriFieldTypeInteger",
			alias: "Deaths",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Recovered",
			type: "esriFieldTypeInteger",
			alias: "Recovered",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Active",
			type: "esriFieldTypeInteger",
			alias: "Active",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Incident_Rate",
			type: "esriFieldTypeDouble",
			alias: "Incident Rate",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "People_Tested",
			type: "esriFieldTypeInteger",
			alias: "People Tested",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "People_Hospitalized",
			type: "esriFieldTypeInteger",
			alias: "People_Hospitalized",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "Mortality_Rate",
			type: "esriFieldTypeDouble",
			alias: "Mortality_Rate",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "UID",
			type: "esriFieldTypeInteger",
			alias: "UID",
			sqlType: "sqlTypeOther",
			domain: null,
			defaultValue: null,
		},
		{
			name: "ISO3",
			type: "esriFieldTypeString",
			alias: "ISO3",
			sqlType: "sqlTypeOther",
			length: 3,
			domain: null,
			defaultValue: null,
		},
	],
	features: [
		{
			attributes: {
				OBJECTID: 1,
				Country_Region: "Afghanistan",
				Last_Update: 1632514912000,
				Lat: 33.93911,
				Long_: 67.709953,
				Confirmed: 154960,
				Deaths: 7199,
				Recovered: null,
				Active: null,
				Incident_Rate: 398.064741572213,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 4.6457150232318,
				UID: 4,
				ISO3: "AFG",
			},
			geometry: {
				x: 67.709953000000041,
				y: 33.939110000000028,
			},
		},
		{
			attributes: {
				OBJECTID: 2,
				Country_Region: "Albania",
				Last_Update: 1632514912000,
				Lat: 41.1533,
				Long_: 20.1683,
				Confirmed: 166690,
				Deaths: 2619,
				Recovered: null,
				Active: null,
				Incident_Rate: 5792.27187434846,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.57118003479513,
				UID: 8,
				ISO3: "ALB",
			},
			geometry: {
				x: 20.168300000000045,
				y: 41.153300000000058,
			},
		},
		{
			attributes: {
				OBJECTID: 3,
				Country_Region: "Algeria",
				Last_Update: 1632514912000,
				Lat: 28.0339,
				Long_: 1.6596,
				Confirmed: 202283,
				Deaths: 5748,
				Recovered: null,
				Active: null,
				Incident_Rate: 461.29575526858,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.84156355205331,
				UID: 12,
				ISO3: "DZA",
			},
			geometry: {
				x: 1.6596000000000686,
				y: 28.033900000000074,
			},
		},
		{
			attributes: {
				OBJECTID: 4,
				Country_Region: "Andorra",
				Last_Update: 1632514912000,
				Lat: 42.5063,
				Long_: 1.5218,
				Confirmed: 15167,
				Deaths: 130,
				Recovered: null,
				Active: null,
				Incident_Rate: 19629.8453374749,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.857124019252324,
				UID: 20,
				ISO3: "AND",
			},
			geometry: {
				x: 1.5218000000000416,
				y: 42.506300000000067,
			},
		},
		{
			attributes: {
				OBJECTID: 5,
				Country_Region: "Angola",
				Last_Update: 1632514912000,
				Lat: -11.2027,
				Long_: 17.8739,
				Confirmed: 53840,
				Deaths: 1460,
				Recovered: null,
				Active: null,
				Incident_Rate: 163.815374474522,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.71173848439822,
				UID: 24,
				ISO3: "AGO",
			},
			geometry: {
				x: 17.873900000000049,
				y: -11.202699999999936,
			},
		},
		{
			attributes: {
				OBJECTID: 6,
				Country_Region: "Antigua and Barbuda",
				Last_Update: 1632514912000,
				Lat: 17.0608,
				Long_: -61.7964,
				Confirmed: 2815,
				Deaths: 63,
				Recovered: null,
				Active: null,
				Incident_Rate: 2874.5609018871,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.23801065719361,
				UID: 28,
				ISO3: "ATG",
			},
			geometry: {
				x: -61.796399999999949,
				y: 17.060800000000029,
			},
		},
		{
			attributes: {
				OBJECTID: 7,
				Country_Region: "Argentina",
				Last_Update: 1632514912000,
				Lat: -38.4161,
				Long_: -63.6167,
				Confirmed: 5246998,
				Deaths: 114772,
				Recovered: null,
				Active: null,
				Incident_Rate: 11609.4873200211,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.18738410039417,
				UID: 32,
				ISO3: "ARG",
			},
			geometry: {
				x: -63.61669999999998,
				y: -38.416099999999965,
			},
		},
		{
			attributes: {
				OBJECTID: 8,
				Country_Region: "Armenia",
				Last_Update: 1632514912000,
				Lat: 40.0691,
				Long_: 45.0382,
				Confirmed: 256554,
				Deaths: 5216,
				Recovered: null,
				Active: null,
				Incident_Rate: 8657.90551809273,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.03310024400321,
				UID: 51,
				ISO3: "ARM",
			},
			geometry: {
				x: 45.038200000000074,
				y: 40.069100000000049,
			},
		},
		{
			attributes: {
				OBJECTID: 9,
				Country_Region: "Australia",
				Last_Update: 1632514912000,
				Lat: -25,
				Long_: 133,
				Confirmed: 93943,
				Deaths: 1208,
				Recovered: null,
				Active: null,
				Incident_Rate: 368.987065833454,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.28588612243595,
				UID: 36,
				ISO3: "AUS",
			},
			geometry: {
				x: 133.00000000000011,
				y: -24.999999999999943,
			},
		},
		{
			attributes: {
				OBJECTID: 10,
				Country_Region: "Austria",
				Last_Update: 1632514912000,
				Lat: 47.5162,
				Long_: 14.5501,
				Confirmed: 732157,
				Deaths: 10953,
				Recovered: null,
				Active: null,
				Incident_Rate: 8129.2969443951,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.49599061403497,
				UID: 40,
				ISO3: "AUT",
			},
			geometry: {
				x: 14.550100000000045,
				y: 47.516200000000026,
			},
		},
		{
			attributes: {
				OBJECTID: 11,
				Country_Region: "Azerbaijan",
				Last_Update: 1632514912000,
				Lat: 40.1431,
				Long_: 47.5769,
				Confirmed: 478715,
				Deaths: 6415,
				Recovered: null,
				Active: null,
				Incident_Rate: 4721.43936760141,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.34004574746979,
				UID: 31,
				ISO3: "AZE",
			},
			geometry: {
				x: 47.57690000000008,
				y: 40.143100000000061,
			},
		},
		{
			attributes: {
				OBJECTID: 12,
				Country_Region: "Bahamas",
				Last_Update: 1632514912000,
				Lat: 25.025885,
				Long_: -78.035889,
				Confirmed: 20288,
				Deaths: 512,
				Recovered: null,
				Active: null,
				Incident_Rate: 5159.08536089185,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.52365930599369,
				UID: 44,
				ISO3: "BHS",
			},
			geometry: {
				x: -78.035888999999941,
				y: 25.025885000000073,
			},
		},
		{
			attributes: {
				OBJECTID: 13,
				Country_Region: "Bahrain",
				Last_Update: 1632514912000,
				Lat: 26.0275,
				Long_: 50.55,
				Confirmed: 274614,
				Deaths: 1389,
				Recovered: null,
				Active: null,
				Incident_Rate: 16138.7366940079,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.505800869584216,
				UID: 48,
				ISO3: "BHR",
			},
			geometry: {
				x: 50.550000000000061,
				y: 26.027500000000032,
			},
		},
		{
			attributes: {
				OBJECTID: 14,
				Country_Region: "Bangladesh",
				Last_Update: 1632514912000,
				Lat: 23.685,
				Long_: 90.3563,
				Confirmed: 1549553,
				Deaths: 27368,
				Recovered: null,
				Active: null,
				Incident_Rate: 940.894289463699,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.76618676482831,
				UID: 50,
				ISO3: "BGD",
			},
			geometry: {
				x: 90.356300000000033,
				y: 23.685000000000059,
			},
		},
		{
			attributes: {
				OBJECTID: 15,
				Country_Region: "Barbados",
				Last_Update: 1632514912000,
				Lat: 13.1939,
				Long_: -59.5432,
				Confirmed: 7065,
				Deaths: 63,
				Recovered: null,
				Active: null,
				Incident_Rate: 2458.49442010502,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.89171974522293,
				UID: 52,
				ISO3: "BRB",
			},
			geometry: {
				x: -59.543199999999949,
				y: 13.193900000000042,
			},
		},
		{
			attributes: {
				OBJECTID: 16,
				Country_Region: "Belarus",
				Last_Update: 1632514912000,
				Lat: 53.7098,
				Long_: 27.9534,
				Confirmed: 526242,
				Deaths: 4066,
				Recovered: null,
				Active: null,
				Incident_Rate: 5569.09856274329,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.772648325295206,
				UID: 112,
				ISO3: "BLR",
			},
			geometry: {
				x: 27.953400000000045,
				y: 53.70980000000003,
			},
		},
		{
			attributes: {
				OBJECTID: 17,
				Country_Region: "Belgium",
				Last_Update: 1632514912000,
				Lat: 50.8333,
				Long_: 4.469936,
				Confirmed: 1231523,
				Deaths: 25543,
				Recovered: null,
				Active: null,
				Incident_Rate: 10626.0897686343,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.0740984943034,
				UID: 56,
				ISO3: "BEL",
			},
			geometry: {
				x: 4.4699360000000752,
				y: 50.833300000000065,
			},
		},
		{
			attributes: {
				OBJECTID: 18,
				Country_Region: "Belize",
				Last_Update: 1632514912000,
				Lat: 17.1899,
				Long_: -88.4976,
				Confirmed: 19429,
				Deaths: 399,
				Recovered: null,
				Active: null,
				Incident_Rate: 4886.31133667487,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.05363116990066,
				UID: 84,
				ISO3: "BLZ",
			},
			geometry: {
				x: -88.497599999999977,
				y: 17.189900000000023,
			},
		},
		{
			attributes: {
				OBJECTID: 19,
				Country_Region: "Benin",
				Last_Update: 1632514912000,
				Lat: 9.3077,
				Long_: 2.3158,
				Confirmed: 21450,
				Deaths: 146,
				Recovered: null,
				Active: null,
				Incident_Rate: 176.933512098045,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.680652680652681,
				UID: 204,
				ISO3: "BEN",
			},
			geometry: {
				x: 2.3158000000000243,
				y: 9.307700000000068,
			},
		},
		{
			attributes: {
				OBJECTID: 20,
				Country_Region: "Bhutan",
				Last_Update: 1632514912000,
				Lat: 27.5142,
				Long_: 90.4336,
				Confirmed: 2599,
				Deaths: 3,
				Recovered: null,
				Active: null,
				Incident_Rate: 336.827317356392,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.115429011158138,
				UID: 64,
				ISO3: "BTN",
			},
			geometry: {
				x: 90.433600000000069,
				y: 27.514200000000073,
			},
		},
		{
			attributes: {
				OBJECTID: 21,
				Country_Region: "Bolivia",
				Last_Update: 1632514912000,
				Lat: -16.2902,
				Long_: -63.5887,
				Confirmed: 498331,
				Deaths: 18688,
				Recovered: null,
				Active: null,
				Incident_Rate: 4269.08045889375,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 3.7501178935286,
				UID: 68,
				ISO3: "BOL",
			},
			geometry: {
				x: -63.58869999999996,
				y: -16.29019999999997,
			},
		},
		{
			attributes: {
				OBJECTID: 22,
				Country_Region: "Bosnia and Herzegovina",
				Last_Update: 1632514912000,
				Lat: 43.9159,
				Long_: 17.6791,
				Confirmed: 230801,
				Deaths: 10422,
				Recovered: null,
				Active: null,
				Incident_Rate: 7034.86786057733,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 4.51557835537974,
				UID: 70,
				ISO3: "BIH",
			},
			geometry: {
				x: 17.679100000000062,
				y: 43.915900000000079,
			},
		},
		{
			attributes: {
				OBJECTID: 23,
				Country_Region: "Botswana",
				Last_Update: 1632514912000,
				Lat: -22.3285,
				Long_: 24.6849,
				Confirmed: 176427,
				Deaths: 2360,
				Recovered: null,
				Active: null,
				Incident_Rate: 7502.34412374422,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.33766373627619,
				UID: 72,
				ISO3: "BWA",
			},
			geometry: {
				x: 24.684900000000027,
				y: -22.328499999999963,
			},
		},
		{
			attributes: {
				OBJECTID: 24,
				Country_Region: "Brazil",
				Last_Update: 1632514912000,
				Lat: -14.235,
				Long_: -51.9253,
				Confirmed: 21308178,
				Deaths: 592964,
				Recovered: null,
				Active: null,
				Incident_Rate: 10024.5752941475,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.78280010613765,
				UID: 76,
				ISO3: "BRA",
			},
			geometry: {
				x: -51.925299999999936,
				y: -14.234999999999957,
			},
		},
		{
			attributes: {
				OBJECTID: 25,
				Country_Region: "Brunei",
				Last_Update: 1632514912000,
				Lat: 4.5353,
				Long_: 114.7277,
				Confirmed: 5960,
				Deaths: 33,
				Recovered: null,
				Active: null,
				Incident_Rate: 1362.33865087329,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.553691275167785,
				UID: 96,
				ISO3: "BRN",
			},
			geometry: {
				x: 114.72770000000004,
				y: 4.5353000000000634,
			},
		},
		{
			attributes: {
				OBJECTID: 26,
				Country_Region: "Bulgaria",
				Last_Update: 1632514912000,
				Lat: 42.7339,
				Long_: 25.4858,
				Confirmed: 489423,
				Deaths: 20350,
				Recovered: null,
				Active: null,
				Incident_Rate: 7043.63350361124,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 4.15795743150608,
				UID: 100,
				ISO3: "BGR",
			},
			geometry: {
				x: 25.48580000000004,
				y: 42.733900000000062,
			},
		},
		{
			attributes: {
				OBJECTID: 27,
				Country_Region: "Burkina Faso",
				Last_Update: 1632514912000,
				Lat: 12.2383,
				Long_: -1.5616,
				Confirmed: 14116,
				Deaths: 179,
				Recovered: null,
				Active: null,
				Incident_Rate: 67.5300782968107,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.26806460753755,
				UID: 854,
				ISO3: "BFA",
			},
			geometry: {
				x: -1.5615999999999417,
				y: 12.238300000000038,
			},
		},
		{
			attributes: {
				OBJECTID: 28,
				Country_Region: "Burma",
				Last_Update: 1632514912000,
				Lat: 21.9162,
				Long_: 95.956,
				Confirmed: 455074,
				Deaths: 17413,
				Recovered: null,
				Active: null,
				Incident_Rate: 836.382508634383,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 3.82641064969653,
				UID: 104,
				ISO3: "MMR",
			},
			geometry: {
				x: 95.956000000000074,
				y: 21.91620000000006,
			},
		},
		{
			attributes: {
				OBJECTID: 29,
				Country_Region: "Burundi",
				Last_Update: 1632514912000,
				Lat: -3.3731,
				Long_: 29.9189,
				Confirmed: 16356,
				Deaths: 38,
				Recovered: null,
				Active: null,
				Incident_Rate: 137.551940448655,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.232330643189044,
				UID: 108,
				ISO3: "BDI",
			},
			geometry: {
				x: 29.918900000000065,
				y: -3.3730999999999653,
			},
		},
		{
			attributes: {
				OBJECTID: 30,
				Country_Region: "Cabo Verde",
				Last_Update: 1632514912000,
				Lat: 16.5388,
				Long_: -23.0418,
				Confirmed: 37290,
				Deaths: 333,
				Recovered: null,
				Active: null,
				Incident_Rate: 6706.97928732275,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.893000804505229,
				UID: 132,
				ISO3: "CPV",
			},
			geometry: {
				x: -23.041799999999967,
				y: 16.538800000000037,
			},
		},
		{
			attributes: {
				OBJECTID: 31,
				Country_Region: "Cambodia",
				Last_Update: 1632514912000,
				Lat: 11.55,
				Long_: 104.9167,
				Confirmed: 107441,
				Deaths: 2197,
				Recovered: null,
				Active: null,
				Incident_Rate: 642.629262291322,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.04484321627684,
				UID: 116,
				ISO3: "KHM",
			},
			geometry: {
				x: 104.91670000000003,
				y: 11.550000000000068,
			},
		},
		{
			attributes: {
				OBJECTID: 32,
				Country_Region: "Cameroon",
				Last_Update: 1632514912000,
				Lat: 3.848,
				Long_: 11.5021,
				Confirmed: 85414,
				Deaths: 1368,
				Recovered: null,
				Active: null,
				Incident_Rate: 321.760105453716,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.60161097712319,
				UID: 120,
				ISO3: "CMR",
			},
			geometry: {
				x: 11.50210000000004,
				y: 3.84800000000007,
			},
		},
		{
			attributes: {
				OBJECTID: 33,
				Country_Region: "Canada",
				Last_Update: 1632514912000,
				Lat: 60.001,
				Long_: -95.001,
				Confirmed: 1604476,
				Deaths: 27659,
				Recovered: null,
				Active: null,
				Incident_Rate: 4238.39980566204,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.72386498769692,
				UID: 124,
				ISO3: "CAN",
			},
			geometry: {
				x: -95.000999999999962,
				y: 60.001000000000033,
			},
		},
		{
			attributes: {
				OBJECTID: 34,
				Country_Region: "Central African Republic",
				Last_Update: 1632514912000,
				Lat: 6.6111,
				Long_: 20.9394,
				Confirmed: 11340,
				Deaths: 100,
				Recovered: null,
				Active: null,
				Incident_Rate: 234.794081035844,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.881834215167548,
				UID: 140,
				ISO3: "CAF",
			},
			geometry: {
				x: 20.939400000000035,
				y: 6.6111000000000217,
			},
		},
		{
			attributes: {
				OBJECTID: 35,
				Country_Region: "Chad",
				Last_Update: 1632514912000,
				Lat: 15.4542,
				Long_: 18.7322,
				Confirmed: 5031,
				Deaths: 174,
				Recovered: null,
				Active: null,
				Incident_Rate: 30.6285351651929,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 3.45855694692904,
				UID: 148,
				ISO3: "TCD",
			},
			geometry: {
				x: 18.732200000000031,
				y: 15.454200000000071,
			},
		},
		{
			attributes: {
				OBJECTID: 36,
				Country_Region: "Chile",
				Last_Update: 1632514912000,
				Lat: -35.6751,
				Long_: -71.543,
				Confirmed: 1650238,
				Deaths: 37423,
				Recovered: null,
				Active: null,
				Incident_Rate: 8632.66351607685,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.26773350268264,
				UID: 152,
				ISO3: "CHL",
			},
			geometry: {
				x: -71.54299999999995,
				y: -35.675099999999929,
			},
		},
		{
			attributes: {
				OBJECTID: 37,
				Country_Region: "China",
				Last_Update: 1632514912000,
				Lat: 30.5928,
				Long_: 114.3055,
				Confirmed: 108187,
				Deaths: 4849,
				Recovered: null,
				Active: null,
				Incident_Rate: 7.7019166401131,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 4.48205422093228,
				UID: 156,
				ISO3: "CHN",
			},
			geometry: {
				x: 114.30550000000004,
				y: 30.592800000000068,
			},
		},
		{
			attributes: {
				OBJECTID: 38,
				Country_Region: "Colombia",
				Last_Update: 1632514912000,
				Lat: 4.5709,
				Long_: -74.2973,
				Confirmed: 4946811,
				Deaths: 126032,
				Recovered: null,
				Active: null,
				Incident_Rate: 9721.95483259164,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.54774237382427,
				UID: 170,
				ISO3: "COL",
			},
			geometry: {
				x: -74.29729999999995,
				y: 4.5709000000000515,
			},
		},
		{
			attributes: {
				OBJECTID: 39,
				Country_Region: "Comoros",
				Last_Update: 1632514912000,
				Lat: -11.6455,
				Long_: 43.3333,
				Confirmed: 4112,
				Deaths: 147,
				Recovered: null,
				Active: null,
				Incident_Rate: 472.863804414699,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 3.57490272373541,
				UID: 174,
				ISO3: "COM",
			},
			geometry: {
				x: 43.333300000000065,
				y: -11.64549999999997,
			},
		},
		{
			attributes: {
				OBJECTID: 40,
				Country_Region: "Congo (Brazzaville)",
				Last_Update: 1632514912000,
				Lat: -0.228,
				Long_: 15.8277,
				Confirmed: 14014,
				Deaths: 191,
				Recovered: null,
				Active: null,
				Incident_Rate: 253.964595008565,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.36292279149422,
				UID: 178,
				ISO3: "COG",
			},
			geometry: {
				x: 15.82770000000005,
				y: -0.2279999999999518,
			},
		},
		{
			attributes: {
				OBJECTID: 41,
				Country_Region: "Congo (Kinshasa)",
				Last_Update: 1632514912000,
				Lat: -4.0383,
				Long_: 21.7587,
				Confirmed: 56463,
				Deaths: 1068,
				Recovered: null,
				Active: null,
				Incident_Rate: 63.043897793295,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.89150417087296,
				UID: 180,
				ISO3: "COD",
			},
			geometry: {
				x: 21.758700000000033,
				y: -4.0382999999999356,
			},
		},
		{
			attributes: {
				OBJECTID: 42,
				Country_Region: "Costa Rica",
				Last_Update: 1632514912000,
				Lat: 9.7489,
				Long_: -83.7534,
				Confirmed: 518632,
				Deaths: 6168,
				Recovered: null,
				Active: null,
				Incident_Rate: 10181.0049794724,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.18928257415663,
				UID: 188,
				ISO3: "CRI",
			},
			geometry: {
				x: -83.753399999999942,
				y: 9.7489000000000487,
			},
		},
		{
			attributes: {
				OBJECTID: 43,
				Country_Region: "Cote d'Ivoire",
				Last_Update: 1632514912000,
				Lat: 7.54,
				Long_: -5.5471,
				Confirmed: 59558,
				Deaths: 586,
				Recovered: null,
				Active: null,
				Incident_Rate: 225.784286500918,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.983914839316297,
				UID: 384,
				ISO3: "CIV",
			},
			geometry: {
				x: -5.5470999999999435,
				y: 7.5400000000000205,
			},
		},
		{
			attributes: {
				OBJECTID: 44,
				Country_Region: "Croatia",
				Last_Update: 1632514912000,
				Lat: 45.1,
				Long_: 15.2,
				Confirmed: 397761,
				Deaths: 8566,
				Recovered: null,
				Active: null,
				Incident_Rate: 9689.03857190322,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 2.15355452143373,
				UID: 191,
				ISO3: "HRV",
			},
			geometry: {
				x: 15.200000000000044,
				y: 45.10000000000008,
			},
		},
		{
			attributes: {
				OBJECTID: 45,
				Country_Region: "Cuba",
				Last_Update: 1632514912000,
				Lat: 21.521757,
				Long_: -77.781167,
				Confirmed: 832286,
				Deaths: 7048,
				Recovered: null,
				Active: null,
				Incident_Rate: 7348.05523556197,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.846824288766121,
				UID: 192,
				ISO3: "CUB",
			},
			geometry: {
				x: -77.781166999999982,
				y: 21.521757000000036,
			},
		},
		{
			attributes: {
				OBJECTID: 46,
				Country_Region: "Cyprus",
				Last_Update: 1632514912000,
				Lat: 35.1264,
				Long_: 33.4299,
				Confirmed: 117759,
				Deaths: 551,
				Recovered: null,
				Active: null,
				Incident_Rate: 9753.42089068638,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.467904788593653,
				UID: 196,
				ISO3: "CYP",
			},
			geometry: {
				x: 33.429900000000032,
				y: 35.126400000000046,
			},
		},
		{
			attributes: {
				OBJECTID: 47,
				Country_Region: "Czechia",
				Last_Update: 1632514912000,
				Lat: 49.8175,
				Long_: 15.473,
				Confirmed: 1688457,
				Deaths: 30451,
				Recovered: null,
				Active: null,
				Incident_Rate: 15766.7367449119,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.80348092962983,
				UID: 203,
				ISO3: "CZE",
			},
			geometry: {
				x: 15.47300000000007,
				y: 49.817500000000045,
			},
		},
		{
			attributes: {
				OBJECTID: 48,
				Country_Region: "Denmark",
				Last_Update: 1632514912000,
				Lat: 56.2639,
				Long_: 9.5018,
				Confirmed: 357977,
				Deaths: 2642,
				Recovered: null,
				Active: null,
				Incident_Rate: 6180.32551690609,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 0.738036242551896,
				UID: 208,
				ISO3: "DNK",
			},
			geometry: {
				x: 9.50180000000006,
				y: 56.263900000000035,
			},
		},
		{
			attributes: {
				OBJECTID: 49,
				Country_Region: "Diamond Princess",
				Last_Update: 1632514912000,
				Lat: null,
				Long_: null,
				Confirmed: 712,
				Deaths: 13,
				Recovered: null,
				Active: null,
				Incident_Rate: null,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.82584269662921,
				UID: 9999,
				ISO3: null,
			},
		},
		{
			attributes: {
				OBJECTID: 50,
				Country_Region: "Djibouti",
				Last_Update: 1632514912000,
				Lat: 11.8251,
				Long_: 42.5903,
				Confirmed: 12253,
				Deaths: 162,
				Recovered: null,
				Active: null,
				Incident_Rate: 1240.17967574964,
				People_Tested: null,
				People_Hospitalized: null,
				Mortality_Rate: 1.32212519383008,
				UID: 262,
				ISO3: "DJI",
			},
			geometry: {
				x: 42.59030000000007,
				y: 11.825100000000075,
			},
		},
	],
};

const ActiveCountry = Countries[0];

export { Countries, ActiveCountry, SampleAPIReturn };
