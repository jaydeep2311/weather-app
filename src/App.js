import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import $ from "jquery";
import Lists from "./Components/Lists/Lists";
import Select from "react-select";
import { ApexChart } from "./Components/Details/Details";

function App() {
  const [location, setlocation] = useState([]);
  const [cities, setcities] = useState([]);
  let worldcities = [
    {
      value: "New Delhi",
      value_ascii: "New Delhi",
      lat: 28.6139,
      lng: 77.209,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Delhi",
      capital: "primary",
      population: 249998,
      id: 1356215164,
    },
    {
      value: "Ahmedabad",
      value_ascii: "Ahmedabad",
      lat: 23.03,
      lng: 72.58,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Gujarāt",
      capital: "minor",
      population: 7717000,
      id: 1356304381,
    },
    {
      value: "Mumbai",
      value_ascii: "Mumbai",
      lat: 19.0758,
      lng: 72.8775,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Mahārāshtra",
      capital: "admin",
      population: 22186000,
      id: 1356226629,
    },
    {
      value: "Panaji",
      value_ascii: "Panaji",
      lat: 15.48,
      lng: 73.83,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Goa",
      capital: "admin",
      population: 40017,
      id: 1356909212,
    },
    {
      value: "Jaipur",
      value_ascii: "Jaipur",
      lat: 26.9167,
      lng: 75.8667,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Rājasthān",
      capital: "admin",
      population: 3073350,
      id: 1356293537,
    },
    {
      value: "Vishākhapatnam",
      value_ascii: "Vishakhapatnam",
      lat: 17.7333,
      lng: 83.3167,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Andhra Pradesh",
      capital: null,
      population: 2035922,
      id: 1356692563,
    },
    {
      value: "Hyderābād",
      value_ascii: "Hyderabad",
      lat: 17.3617,
      lng: 78.4747,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Telangana",
      capital: "admin",
      population: 9840000,
      id: 1356871768,
    },
    {
      value: "Chandīgarh",
      value_ascii: "Chandigarh",
      lat: 30.7353,
      lng: 76.7911,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Chandīgarh",
      capital: "admin",
      population: 1026459,
      id: 1356739179,
    },
    {
      value: "Kolkāta",
      value_ascii: "Kolkata",
      lat: 22.5727,
      lng: 88.3639,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "West Bengal",
      capital: "admin",
      population: 18698000,
      id: 1356060520,
    },
    {
      value: "Rānchi",
      value_ascii: "Ranchi",
      lat: 23.3556,
      lng: 85.3347,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Jharkhand",
      capital: "admin",
      population: 1073440,
      id: 1356110588,
    },
    {
      value: "Indore",
      value_ascii: "Indore",
      lat: 22.7206,
      lng: 75.8472,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Madhya Pradesh",
      capital: null,
      population: 1994397,
      id: 1356402812,
    },
    {
      value: "Bhopāl",
      value_ascii: "Bhopal",
      lat: 23.25,
      lng: 77.4167,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Madhya Pradesh",
      capital: "admin",
      population: 1798218,
      id: 1356734039,
    },
    {
      value: "Lucknow",
      value_ascii: "Lucknow",
      lat: 26.847,
      lng: 80.947,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Uttar Pradesh",
      capital: "admin",
      population: 3382000,
      id: 1356891790,
    },
    {
      value: "Āīzawl",
      value_ascii: "Aizawl",
      lat: 23.7333,
      lng: 92.7167,
      country: "India",
      iso2: "IN",
      iso3: "IND",
      admin_name: "Mizoram",
      capital: "admin",
      population: 293416,
      id: 1356342768,
    },
    {
      value: "Bangalore",
      admin_name: "Karnataka",
      lat: "12.983333",
      lng: "77.583333",
    },
    {
      value: "Hyderabad",
      admin_name: "Telangana",
      lat: "17.375278",
      lng: "78.474444",
    },
    {
      value: "Ahmedabad",
      admin_name: "Gujarat",
      lat: "23.033333",
      lng: "72.616667",
    },
    {
      value: "Chennai",
      admin_name: "Tamil Nadu",
      lat: "13.083333",
      lng: "80.283333",
    },
    {
      value: "Kolkata",
      admin_name: "West Bengal",
      lat: "22.569722",
      lng: "88.369722",
    },
    {
      value: "Surat",
      admin_name: "Gujarat",
      lat: "20.966667",
      lng: "72.9",
    },
    {
      value: "Pune",
      admin_name: "Maharashtra",
      lat: "18.533333",
      lng: "73.866667",
    },
    {
      value: "Jaipur",
      admin_name: "Rajasthan",
      lat: "24.583333",
      lng: "86.85",
    },
    {
      value: "Lucknow",
      admin_name: "Uttar Pradesh",
      lat: "26.85",
      lng: "80.916667",
    },
    {
      value: "Kanpur",
      admin_name: "Uttar Pradesh",
      lat: "26.466667",
      lng: "80.35",
    },
    {
      value: "Nagpur",
      admin_name: "Maharashtra",
      lat: "23.3",
      lng: "82.3",
    },
    {
      value: "Indore",
      admin_name: "Madhya Pradesh",
      lat: "22.716667",
      lng: "75.833333",
    },
    {
      value: "Thane",
      admin_name: "Maharashtra",
      lat: "19.2",
      lng: "72.966667",
    },
    {
      value: "Bhopal",
      admin_name: "Madhya Pradesh",
      lat: "23.266667",
      lng: "77.4",
    },
    {
      value: "Visakhapatnam",
      admin_name: "Andhra Pradesh",
      lat: "17.7",
      lng: "83.3",
    },
    {
      value: "Pimpri-Chinchwad",
      admin_name: "Maharashtra",
      lat: "18.6279288",
      lng: "73.8009829",
    },
    {
      value: "Patna",
      admin_name: "Bihar",
      lat: "23.3",
      lng: "82.666667",
    },
    {
      value: "Vadodara",
      admin_name: "Gujarat",
      lat: "22.3",
      lng: "73.2",
    },
    {
      value: "Ghaziabad",
      admin_name: "Uttar Pradesh",
      lat: "28.666667",
      lng: "77.433333",
    },
    {
      value: "Ludhiana",
      admin_name: "Punjab",
      lat: "30.9",
      lng: "75.85",
    },
    {
      value: "Agra",
      admin_name: "Uttar Pradesh",
      lat: "27.183333",
      lng: "78.016667",
    },
    {
      value: "Nashik",
      admin_name: "Maharashtra",
      lat: "20.0110224",
      lng: "73.7903373",
    },
    {
      value: "Faridabad",
      admin_name: "Haryana",
      lat: "28.433333",
      lng: "77.316667",
    },
    {
      value: "Meerut",
      admin_name: "Uttar Pradesh",
      lat: "28.983333",
      lng: "77.7",
    },
    {
      value: "Rajkot",
      admin_name: "Gujarat",
      lat: "25.731111",
      lng: "75.5925",
    },
    {
      value: "Kalyan-Dombivali",
      admin_name: "Maharashtra",
      lat: "19.235433",
      lng: "73.129889",
    },
    {
      value: "Vasai-Virar",
      admin_name: "Maharashtra",
      lat: "19.4258788",
      lng: "72.8224901",
    },
    {
      value: "Varanasi",
      admin_name: "Uttar Pradesh",
      lat: "25.333333",
      lng: "83",
    },
    {
      value: "Srinagar",
      admin_name: "Jammu and Kashmir",
      lat: "30.216667",
      lng: "78.783333",
    },
    {
      value: "Aurangabad",
      admin_name: "Maharashtra",
      lat: "26.596",
      lng: "79.9701",
    },
    {
      value: "Dhanbad",
      admin_name: "Jharkhand",
      lat: "23.8",
      lng: "86.45",
    },
    {
      value: "Amritsar",
      admin_name: "Punjab",
      lat: "31.633056",
      lng: "74.865556",
    },
    {
      value: "Navi Mumbai",
      admin_name: "Maharashtra",
      lat: "19.033049",
      lng: "73.029662",
    },
    {
      value: "Allahabad",
      admin_name: "Uttar Pradesh",
      lat: "25.45",
      lng: "81.85",
    },
    {
      value: "Ranchi",
      admin_name: "Jharkhand",
      lat: "23.35",
      lng: "85.333333",
    },
    {
      value: "Howrah",
      admin_name: "West Bengal",
      lat: "22.589167",
      lng: "88.310278",
    },
    {
      value: "Coimbatore",
      admin_name: "Tamil Nadu",
      lat: "10.9925",
      lng: "76.961389",
    },
    {
      value: "Jabalpur",
      admin_name: "Madhya Pradesh",
      lat: "23.166667",
      lng: "79.95",
    },
    {
      value: "Gwalior",
      admin_name: "Madhya Pradesh",
      lat: "26.223611",
      lng: "78.179167",
    },
    {
      value: "Vijayawada",
      admin_name: "Andhra Pradesh",
      lat: "16.516667",
      lng: "80.616667",
    },
    {
      value: "Jodhpur",
      admin_name: "Rajasthan",
      lat: "26.286667",
      lng: "73.03",
    },
    {
      value: "Madurai",
      admin_name: "Tamil Nadu",
      lat: "9.933333",
      lng: "78.116667",
    },
    {
      value: "Raipur",
      admin_name: "Chhattisgarh",
      lat: "30.316667",
      lng: "78.1",
    },
    {
      value: "Kota",
      admin_name: "Rajasthan",
      lat: "29.825278",
      lng: "78.671389",
    },
    {
      value: "Guwahati",
      admin_name: "Assam",
      lat: "26.183333",
      lng: "91.733333",
    },
    {
      value: "Chandigarh",
      admin_name: "Chandigarh",
      lat: "30.7343",
      lng: "76.7933",
    },
    {
      value: "Solapur",
      admin_name: "Maharashtra",
      lat: "17.683333",
      lng: "75.916667",
    },
    {
      value: "Hubballi-Dharwad",
      admin_name: "Karnataka",
      lat: "15.364708",
      lng: "75.123955",
    },
    {
      value: "Bareilly",
      admin_name: "Uttar Pradesh",
      lat: "28.35",
      lng: "79.416667",
    },
    {
      value: "Moradabad",
      admin_name: "Uttar Pradesh",
      lat: "28.833333",
      lng: "78.783333",
    },
    {
      value: "Mysore",
      admin_name: "Karnataka",
      lat: "12.307222",
      lng: "76.649722",
    },
    {
      value: "Gurgaon",
      admin_name: "Haryana",
      lat: "27.6928",
      lng: "79.6766",
    },
    {
      value: "Aligarh",
      admin_name: "Uttar Pradesh",
      lat: "27.883333",
      lng: "78.083333",
    },
    {
      value: "Jalandhar",
      admin_name: "Punjab",
      lat: "23.9",
      lng: "78.433333",
    },
    {
      value: "Tiruchirappalli",
      admin_name: "Tamil Nadu",
      lat: "10.805",
      lng: "78.685556",
    },
    {
      value: "Bhubaneswar",
      admin_name: "Orissa",
      lat: "20.233333",
      lng: "85.833333",
    },
    {
      value: "Salem",
      admin_name: "Tamil Nadu",
      lat: "15.7",
      lng: "73.916667",
    },
    {
      value: "Mira-Bhayandar",
      admin_name: "Maharashtra",
      lat: "19.295233",
      lng: "72.854390",
    },
    {
      value: "Warangal",
      admin_name: "Telangana",
      lat: "18",
      lng: "79.583333",
    },
    {
      value: "Thiruvananthapuram",
      admin_name: "Kerala",
      lat: "8.506944",
      lng: "76.956944",
    },
    {
      value: "Guntur",
      admin_name: "Andhra Pradesh",
      lat: "16.3",
      lng: "80.45",
    },
    {
      value: "Bhiwandi",
      admin_name: "Maharashtra",
      lat: "19.3",
      lng: "73.066667",
    },
    {
      value: "Saharanpur",
      admin_name: "Uttar Pradesh",
      lat: "29.966667",
      lng: "77.55",
    },
    {
      value: "Gorakhpur",
      admin_name: "Uttar Pradesh",
      lat: "26.755",
      lng: "83.373889",
    },
    {
      value: "Bikaner",
      admin_name: "Rajasthan",
      lat: "28.016667",
      lng: "73.3",
    },
    {
      value: "Amravati",
      admin_name: "Maharashtra",
      lat: "20.933333",
      lng: "77.75",
    },
    {
      value: "Noida",
      admin_name: "Uttar Pradesh",
      lat: "28.5726442",
      lng: "77.3547609",
    },
    {
      value: "Jamshedpur",
      admin_name: "Jharkhand",
      lat: "22.8",
      lng: "86.183333",
    },
    {
      value: "Bhilai",
      admin_name: "Chhattisgarh",
      lat: "21.216667",
      lng: "81.433333",
    },
    {
      value: "Cuttack",
      admin_name: "Orissa",
      lat: "20.5",
      lng: "85.833333",
    },
    {
      value: "Firozabad",
      admin_name: "Uttar Pradesh",
      lat: "27.15",
      lng: "78.416667",
    },
    {
      value: "Kochi",
      admin_name: "Kerala",
      lat: "9.966667",
      lng: "76.233333",
    },
    {
      value: "Bhavnagar",
      admin_name: "Gujarat",
      lat: "21.766667",
      lng: "72.15",
    },
    {
      value: "Dehradun",
      admin_name: "Uttarakhand",
      lat: "30.3255646",
      lng: "78.0436813",
    },
    {
      value: "Durgapur",
      admin_name: "West Bengal",
      lat: "24.75",
      lng: "87.733333",
    },
    {
      value: "Asansol",
      admin_name: "West Bengal",
      lat: "24.233333",
      lng: "87.283333",
    },
    {
      value: "Nanded",
      admin_name: "Maharashtra",
      lat: "19.15",
      lng: "77.333333",
    },
    {
      value: "Kolhapur",
      admin_name: "Maharashtra",
      lat: "16.7",
      lng: "74.216667",
    },
    {
      value: "Ajmer",
      admin_name: "Rajasthan",
      lat: "26.45",
      lng: "74.633333",
    },
    {
      value: "Gulbarga",
      admin_name: "Karnataka",
      lat: "17.333333",
      lng: "76.833333",
    },
    {
      value: "Jamnagar",
      admin_name: "Gujarat",
      lat: "22.466667",
      lng: "70.066667",
    },
    {
      value: "Ujjain",
      admin_name: "Madhya Pradesh",
      lat: "23.183333",
      lng: "75.766667",
    },
    {
      value: "lngi",
      admin_name: "Uttar Pradesh",
      lat: "28.75",
      lng: "77.283333",
    },
    {
      value: "Siliguri",
      admin_name: "West Bengal",
      lat: "26.716111",
      lng: "88.423611",
    },
    {
      value: "Jhansi",
      admin_name: "Uttar Pradesh",
      lat: "25.433333",
      lng: "78.583333",
    },
    {
      value: "Ulhasnagar",
      admin_name: "Maharashtra",
      lat: "19.216667",
      lng: "73.15",
    },
    {
      value: "Nellore",
      admin_name: "Andhra Pradesh",
      lat: "14.433333",
      lng: "79.966667",
    },
    {
      value: "Jammu",
      admin_name: "Jammu and Kashmir",
      lat: "32.733333",
      lng: "74.866667",
    },
    {
      value: "Sangli-Miraj & Kupwad",
      admin_name: "Maharashtra",
      lat: "16.860446",
      lng: "74.565518",
    },
    {
      value: "Belgaum",
      admin_name: "Karnataka",
      lat: "15.866667",
      lng: "74.5",
    },
    {
      value: "Mangalore",
      admin_name: "Karnataka",
      lat: "12.863889",
      lng: "74.835278",
    },
    {
      value: "Ambattur",
      admin_name: "Tamil Nadu",
      lat: "13.076667",
      lng: "80.088611",
    },
    {
      value: "Tirunelveli",
      admin_name: "Tamil Nadu",
      lat: "8.733333",
      lng: "77.7",
    },
    {
      value: "Malegaon",
      admin_name: "Maharashtra",
      lat: "20.55",
      lng: "74.533333",
    },
    {
      value: "Gaya",
      admin_name: "Bihar",
      lat: "24.783333",
      lng: "85",
    },
    {
      value: "Jalgaon",
      admin_name: "Maharashtra",
      lat: "21.048611",
      lng: "76.534444",
    },
    {
      value: "Udaipur",
      admin_name: "Rajasthan",
      lat: "26.6978",
      lng: "79.9216",
    },
    {
      value: "Maheshtala",
      admin_name: "West Bengal",
      lat: "22.508621",
      lng: "88.2532182",
    },
    {
      value: "Tirupur",
      admin_name: "Tamil Nadu",
      lat: "11.1",
      lng: "77.35",
    },
    {
      value: "Davanagere",
      admin_name: "Karnataka",
      lat: "14.4596984",
      lng: "75.9289654951128",
    },
    {
      value: "Kozhikode",
      admin_name: "Kerala",
      lat: "11.25",
      lng: "75.766667",
    },
    {
      value: "Akola",
      admin_name: "Maharashtra",
      lat: "24.766667",
      lng: "74.2",
    },
    {
      value: "Kurnool",
      admin_name: "Andhra Pradesh",
      lat: "15.833333",
      lng: "78.05",
    },
    {
      value: "Rajpur Sonarpur",
      admin_name: "West Bengal",
      lat: "22.449089",
      lng: "88.391473",
    },
    {
      value: "Bokaro",
      admin_name: "Jharkhand",
      lat: "23.783333",
      lng: "85.966667",
    },
    {
      value: "South Dumdum",
      admin_name: "West Bengal",
      lat: "22.610000",
      lng: "88.400000",
    },
    {
      value: "Bellary",
      admin_name: "Karnataka",
      lat: "15.15",
      lng: "76.933333",
    },
    {
      value: "Patiala",
      admin_name: "Punjab",
      lat: "30.326667",
      lng: "76.400278",
    },
    {
      value: "Gopalpur",
      admin_name: "West Bengal",
      lat: "24.833333",
      lng: "87.8",
    },
    {
      value: "Agartala",
      admin_name: "Tripura",
      lat: "23.836389",
      lng: "91.275",
    },
    {
      value: "Bhagalpur",
      admin_name: "Bihar",
      lat: "26.169722",
      lng: "83.872778",
    },
    {
      value: "Muzaffarnagar",
      admin_name: "Uttar Pradesh",
      lat: "29.466667",
      lng: "77.683333",
    },
    {
      value: "Bhatpara",
      admin_name: "West Bengal",
      lat: "22.871389",
      lng: "88.408889",
    },
    {
      value: "Panihati",
      admin_name: "West Bengal",
      lat: "22.694167",
      lng: "88.374444",
    },
    {
      value: "Latur",
      admin_name: "Maharashtra",
      lat: "18.4",
      lng: "76.583333",
    },
    {
      value: "Dhule",
      admin_name: "Maharashtra",
      lat: "20.9",
      lng: "74.783333",
    },
    {
      value: "Rohtak",
      admin_name: "Haryana",
      lat: "28.9",
      lng: "76.566667",
    },
    {
      value: "Korba",
      admin_name: "Chhattisgarh",
      lat: "22.35",
      lng: "82.683333",
    },
    {
      value: "Bhilwara",
      admin_name: "Rajasthan",
      lat: "25.35",
      lng: "74.633333",
    },
    {
      value: "Brahmapur",
      admin_name: "Orissa",
      lat: "19.316667",
      lng: "84.783333",
    },
    {
      value: "Muzaffarpur",
      admin_name: "Bihar",
      lat: "26.116667",
      lng: "85.4",
    },
    {
      value: "Ahmednagar",
      admin_name: "Maharashtra",
      lat: "19.083333",
      lng: "74.733333",
    },
    {
      value: "Mathura",
      admin_name: "Uttar Pradesh",
      lat: "27.5",
      lng: "77.683333",
    },
    {
      value: "Kollam",
      admin_name: "Kerala",
      lat: "8.880556",
      lng: "76.591667",
    },
    {
      value: "Avadi",
      admin_name: "Tamil Nadu",
      lat: "13.115556",
      lng: "80.101667",
    },
    {
      value: "Rajahmundry",
      admin_name: "Andhra Pradesh",
      lat: "16.983333",
      lng: "81.783333",
    },
    {
      value: "Kadapa",
      admin_name: "Andhra Pradesh",
      lat: "14.466667",
      lng: "78.816667",
    },
    {
      value: "Kamarhati",
      admin_name: "West Bengal",
      lat: "22.671111",
      lng: "88.374722",
    },
    {
      value: "Bilaspur",
      admin_name: "Chhattisgarh",
      lat: "22.083333",
      lng: "82.15",
    },
    {
      value: "Shahjahanpur",
      admin_name: "Uttar Pradesh",
      lat: "27.883333",
      lng: "79.916667",
    },
    {
      value: "Bijapur",
      admin_name: "Karnataka",
      lat: "18.8",
      lng: "80.816667",
    },
    {
      value: "Rampur",
      admin_name: "Uttar Pradesh",
      lat: "23.283333",
      lng: "85.433333",
    },
    {
      value: "Shivamogga (Shimoga)",
      admin_name: "Karnataka",
      lat: "13.929930",
      lng: "75.568101",
    },
    {
      value: "Chandrapur",
      admin_name: "Maharashtra",
      lat: "19.6",
      lng: "83.883333",
    },
    {
      value: "Junagadh",
      admin_name: "Gujarat",
      lat: "21.516667",
      lng: "70.466667",
    },
    {
      value: "Thrissur",
      admin_name: "Kerala",
      lat: "10.516667",
      lng: "76.216667",
    },
    {
      value: "Alwar",
      admin_name: "Rajasthan",
      lat: "27.566667",
      lng: "76.6",
    },
    {
      value: "Bardhaman",
      admin_name: "West Bengal",
      lat: "23.240556",
      lng: "87.869444",
    },
    {
      value: "Kulti",
      admin_name: "West Bengal",
      lat: "23.733333",
      lng: "86.85",
    },
    {
      value: "Kakinada",
      admin_name: "Andhra Pradesh",
      lat: "16.933333",
      lng: "82.216667",
    },
    {
      value: "Nizamabad",
      admin_name: "Telangana",
      lat: "26.050556",
      lng: "83.058889",
    },
    {
      value: "Parbhani",
      admin_name: "Maharashtra",
      lat: "19.266667",
      lng: "76.783333",
    },
    {
      value: "Tumkur",
      admin_name: "Karnataka",
      lat: "13.342222",
      lng: "77.101667",
    },
    {
      value: "Hisar",
      admin_name: "Haryana",
      lat: "29.166667",
      lng: "75.716667",
    },
    {
      value: "Ozhukarai",
      admin_name: "Puducherry",
      lat: "11.948880",
      lng: "79.712141",
    },
    {
      value: "Bihar Sharif",
      admin_name: "Bihar",
      lat: "25.183333",
      lng: "85.516667",
    },
    {
      value: "Panipat",
      admin_name: "Haryana",
      lat: "29.388889",
      lng: "76.968056",
    },
    {
      value: "Darbhanga",
      admin_name: "Bihar",
      lat: "26.166667",
      lng: "85.9",
    },
    {
      value: "Bally",
      admin_name: "West Bengal",
      lat: "15.166667",
      lng: "74.033333",
    },
    {
      value: "Aizawl",
      admin_name: "Mizoram",
      lat: "23.724444",
      lng: "92.7175",
    },
    {
      value: "Dewas",
      admin_name: "Madhya Pradesh",
      lat: "22.966667",
      lng: "76.066667",
    },
    {
      value: "Ichalkaranji",
      admin_name: "Maharashtra",
      lat: "16.7",
      lng: "74.466667",
    },
    {
      value: "Tirupati",
      admin_name: "Andhra Pradesh",
      lat: "13.65",
      lng: "79.416667",
    },
    {
      value: "Karnal",
      admin_name: "Haryana",
      lat: "29.683333",
      lng: "76.983333",
    },
    {
      value: "Bathinda",
      admin_name: "Punjab",
      lat: "30.2081076",
      lng: "74.9485371",
    },
    {
      value: "Jalna",
      admin_name: "Maharashtra",
      lat: "24.0988",
      lng: "79.2137",
    },
    {
      value: "Barasat",
      admin_name: "West Bengal",
      lat: "22.684167",
      lng: "88.441111",
    },
    {
      value: "Kirari Suleman Nagar",
      admin_name: "Delhi",
      lat: "28.701638",
      lng: "77.047811",
    },
    {
      value: "Purnia",
      admin_name: "Bihar",
      lat: "24.516667",
      lng: "87.133333",
    },
    {
      value: "Satna",
      admin_name: "Madhya Pradesh",
      lat: "24.583333",
      lng: "80.833333",
    },
    {
      value: "Mau",
      admin_name: "Uttar Pradesh",
      lat: "25.941667",
      lng: "83.561111",
    },
    {
      value: "Sonipat",
      admin_name: "Haryana",
      lat: "28.983333",
      lng: "77.016667",
    },
    {
      value: "Farrukhabad",
      admin_name: "Uttar Pradesh",
      lat: "27.4",
      lng: "79.566667",
    },
    {
      value: "Sagar",
      admin_name: "Madhya Pradesh",
      lat: "22.066667",
      lng: "82",
    },
    {
      value: "Rourkela",
      admin_name: "Orissa",
      lat: "22.2",
      lng: "84.883333",
    },
    {
      value: "Durg",
      admin_name: "Chhattisgarh",
      lat: "21.183333",
      lng: "81.283333",
    },
    {
      value: "Imphal",
      admin_name: "Manipur",
      lat: "24.816667",
      lng: "93.95",
    },
    {
      value: "Ratlam",
      admin_name: "Madhya Pradesh",
      lat: "23.316667",
      lng: "75.066667",
    },
    {
      value: "Hapur",
      admin_name: "Uttar Pradesh",
      lat: "28.716667",
      lng: "77.783333",
    },
    {
      value: "Anantapur",
      admin_name: "Andhra Pradesh",
      lat: "26.829",
      lng: "79.5342",
    },
    {
      value: "Arrah",
      admin_name: "Bihar",
      lat: "25.566667",
      lng: "84.666667",
    },
    {
      value: "Karimnagar",
      admin_name: "Telangana",
      lat: "27.7974",
      lng: "79.2581",
    },
    {
      value: "Etawah",
      admin_name: "Uttar Pradesh",
      lat: "26.7769",
      lng: "79.0239",
    },
    {
      value: "Ambernath",
      admin_name: "Maharashtra",
      lat: "19.2015607",
      lng: "73.2004771",
    },
    {
      value: "North Dumdum",
      admin_name: "West Bengal",
      lat: "22.652080",
      lng: "88.419070",
    },
    {
      value: "Bharatpur",
      admin_name: "Rajasthan",
      lat: "27.1268",
      lng: "79.3921",
    },
    {
      value: "Begusarai",
      admin_name: "Bihar",
      lat: "25.416667",
      lng: "86.133333",
    },
    {
      value: "New Delhi",
      admin_name: "Delhi",
      lat: "28.6",
      lng: "77.2",
    },
    {
      value: "Gandhidham",
      admin_name: "Gujarat",
      lat: "23.083333",
      lng: "70.133333",
    },
    {
      value: "Baranagar",
      admin_name: "West Bengal",
      lat: "22.643333",
      lng: "88.365278",
    },
    {
      value: "Tiruvottiyur",
      admin_name: "Tamil Nadu",
      lat: "13.157778",
      lng: "80.304167",
    },
    {
      value: "Puducherry",
      admin_name: "Puducherry",
      lat: "11.93",
      lng: "79.83",
    },
    {
      value: "Sikar",
      admin_name: "Rajasthan",
      lat: "27.616667",
      lng: "75.15",
    },
    {
      value: "Thoothukudi",
      admin_name: "Tamil Nadu",
      lat: "8.783333",
      lng: "78.133333",
    },
    {
      value: "Rewa",
      admin_name: "Madhya Pradesh",
      lat: "27.9161",
      lng: "79.0231",
    },
    {
      value: "Mirzapur",
      admin_name: "Uttar Pradesh",
      lat: "25.15",
      lng: "82.583333",
    },
    {
      value: "Raichur",
      admin_name: "Karnataka",
      lat: "16.2",
      lng: "77.366667",
    },
    {
      value: "Pali",
      admin_name: "Rajasthan",
      lat: "29.85",
      lng: "78.543889",
    },
    {
      value: "Khammam",
      admin_name: "Telangana",
      lat: "17.25",
      lng: "80.15",
    },
    {
      value: "Vizianagaram",
      admin_name: "Andhra Pradesh",
      lat: "18.116667",
      lng: "83.416667",
    },
    {
      value: "Katihar",
      admin_name: "Bihar",
      lat: "25.533333",
      lng: "87.583333",
    },
    {
      value: "Haridwar",
      admin_name: "Uttarakhand",
      lat: "29.966667",
      lng: "78.166667",
    },
    {
      value: "Sri Ganganagar",
      admin_name: "Rajasthan",
      lat: "29.916667",
      lng: "73.883333",
    },
    {
      value: "Karawal Nagar",
      admin_name: "Delhi",
      lat: "28.728310",
      lng: "77.276926",
    },
    {
      value: "Nagercoil",
      admin_name: "Tamil Nadu",
      lat: "8.193889",
      lng: "77.431389",
    },
    {
      value: "Mango",
      admin_name: "Jharkhand",
      lat: "13.22526165",
      lng: "79.1055442299247",
    },
    {
      value: "Bulandshahr",
      admin_name: "Uttar Pradesh",
      lat: "28.4",
      lng: "77.85",
    },
    {
      value: "Thanjavur",
      admin_name: "Tamil Nadu",
      lat: "10.8",
      lng: "79.15",
    },
  ];

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          function ipLookUp() {
            $.ajax("http://ip-api.com/json").then(
              function success(response) {
                setlocation({
                  value: response.city,
                  admin_name: response.state,
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
                console.log(location);
              },

              function fail(data, status) {
                console.log("Request failed.  Returned status of", status);
              }
            );
          }
          ipLookUp();

          var output = [];
          for (var i = 0; i < worldcities.length; i++) {
            worldcities[i]["label"] =
              worldcities[i].value + " " + worldcities[i].admin_name;
            output.push(worldcities[i]);
            console.log(worldcities[i]);
          }
          setcities(output);

          console.log(cities);
        },
        function error(error_message) {
          // for when getting location results in an error
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log("geolocation is not enabled on this browser");
    }
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div classname="SearchContainer">
              <svg
                data-v-da0eae2c=""
                viewBox="0 0 512 512"
                className="SearchIcon IconPosition"
              >
                <path
                  data-v-da0eae2c=""
                  d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z"
                ></path>
              </svg>
              <Select
                // value={{value:}}
                onChange={(e) => setlocation(e)}
                options={cities}
                className="option"
                defaultValue={location ? location.value : ""}
              />
              {/* <select
                className="Searchinput"
                value={location ? location : ""}
                onChange={(e) => setlocation(e.target.value)}
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select> */}
              <button data-v-da0eae2c="" className="SearchButton">
                <svg
                  data-v-da0eae2c=""
                  viewBox="0 0 511.999 511.999"
                  className="SearchIcon"
                >
                  <path
                    data-v-da0eae2c=""
                    d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <Lists location={location}></Lists>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ApexChart location={location}></ApexChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
