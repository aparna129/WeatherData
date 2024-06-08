import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  useEffect(() => {
    const fetchWeather = async (location) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=9eba8487c0b8425d9e4131249233112&q=${location}&aqi=no`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather(selectedLocation);
  }, [selectedLocation]);
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  }, []);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  }, []);

  return (
    <div className="homePage">
      <div className="HeaderAndFooter">
        <Header />
      </div>

      <div className="weatherSection">
        <div className="box">
          <div>
            <select
              className="selectBox"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Nanded">Nanded</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Pune">Pune</option>
              <option value="Surat">Surat</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Indore">Indore</option>
              <option value="Thane">Thane</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Patna">Patna</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Ludhiana">Ludhiana</option>
              <option value="Agra">Agra</option>
              <option value="Nashik">Nashik</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Meerut">Meerut</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Srinagar">Srinagar</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Dhanbad">Dhanbad</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
              <option value="Allahabad">Allahabad</option>
              <option value="Ranchi">Ranchi</option>
              <option value="Howrah">Howrah</option>
              <option value="Jabalpur">Jabalpur</option>
              <option value="Gwalior">Gwalior</option>
              <option value="Vijayawada">Vijayawada</option>
              <option value="Jodhpur">Jodhpur</option>
              <option value="Madurai">Madurai</option>
              <option value="Raipur">Raipur</option>
              <option value="Kota">Kota</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Guwahati">Guwahati</option>
              <option value="Solapur">Solapur</option>
              <option value="Tiruchirappalli">Tiruchirappalli</option>
              <option value="Bareilly">Bareilly</option>
              <option value="Moradabad">Moradabad</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Mysore">Mysore</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Srinagar">Srinagar</option>
              <option value="Aligarh">Aligarh</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Rourkela">Rourkela</option>
              <option value="Rajahmundry">Rajahmundry</option>
              <option value="Shimla">Shimla</option>
              <option value="Tirupati">Tirupati</option>
              <option value="Udaipur">Udaipur</option>
            </select>
          </div>

          <p className="dateAndTime">
            Date : {date} , Time : {time}
          </p>

          <div>
            {weather ? (
              <div>
                <div>
                  <img
                    alt="weathericon"
                    src={weather.current.condition.icon}
                    className="icon"
                  />
                  <p className="condition">{weather.current.condition.text}</p>
                </div>

                <div className="details">
                  <p className="fields">
                    Temperature : {weather.current.temp_c}°C
                  </p>

                  <p className="fields">
                    Pressure : {weather.current.pressure_mb} mbar
                  </p>

                  <p className="fields">
                    Wind : {weather.current.wind_kph} km/hr
                  </p>

                  <p className="fields">Humidity {weather.current.humidity}%</p>
                </div>
              </div>
            ) : (
              <>
                <p className="error">Select a City</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="HeaderAndFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
