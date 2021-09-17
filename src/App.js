import React, {useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search'
import Map from './components/Map'

function App() {
  let caseCountryUrl = 'https://covid-19-data.unstatshub.org/datasets/cases-country/api';
const [caseCountryData, setCaseCountryData] = useState([]);
const [activeCountry, setActiveCountry] = useState({});
const [query, setQuery] = useState("");
const [loading, setLoading] = useState(false);

async function fetchCountryData() {
  const response = await fetch(caseCountryUrl);
  return await response.json();
}

useEffect(() => {
  fetchCountryData().then(data =>console.log(data));
}, []);

  return (
    <>
      <Search/>
      <Map/>
    </>
  );
}

export default App;
