import React, { useState, useEffect } from "react";

import cloud from "./assets/cloud.png";
import cloudy from "./assets/cloudy.png";
import rainy from "./assets/rainy.png";
import snow from "./assets/snowflake.png";
import mist from "./assets/mist.png";
import sunny from "./assets/contrast.png";

import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

type WeatherAppProps = {
  user: any;
};

const icons: Record<string, string> = {
  Clouds: cloud,
  Clear: cloudy,
  Rain: rainy,
  Snow: snow,
  Mist: mist,
  Sunny: sunny,
};

const WeatherApp: React.FC<WeatherAppProps> = ({ user }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  // ⭐ MISSING STATE (THIS FIXES YOUR CODE)
  const [savedCities, setSavedCities] = useState<string[]>([]);

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c223b2098cd1e64f7ee38c83a5eb8117&units=metric`,
      );

      const data = await res.json();

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      setWeather(data);
      console.log(data);
      console.log("Logged user:", user);
    } catch (error) {
      console.log(error);
    }
  };

  const saveCity = async (cityName: string) => {
    if (savedCities.includes(cityName)) {
      alert("City already saved");
      return;
    }
    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      await addDoc(collection(db, "cities"), {
        uid: user.uid,
        city: cityName,
      });

      alert("City saved!");

      // ⭐ Reload saved cities after saving
      loadCities();
    } catch (error) {
      console.log(error);
    }
  };

  const loadCities = async () => {
    if (!user) return;

    const q = query(collection(db, "cities"), where("uid", "==", user.uid));

    const querySnapshot = await getDocs(q);

    const cities: string[] = [];

    querySnapshot.forEach((doc) => {
      cities.push(doc.data().city);
    });

    setSavedCities(cities);
  };

  useEffect(() => {
    loadCities();
  }, [user]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Check Weather</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather} style={{ marginLeft: "10px" }}>
        Check
      </button>

      {weather && weather.main && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}</h3>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].main}</p>

          <img
            src={icons[weather.weather[0].main]}
            style={{ height: "200px" }}
          />

          <br />
          <br />

          <button onClick={() => saveCity(weather.name)}>Save City</button>
        </div>
      )}

      <h3>Saved Cities</h3>

      {savedCities.map((c, index) => (
        <div key={index}>
          {c}

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setCity(c);
              getWeather();
            }}
          >
            Show Weather
          </button>
        </div>
      ))}
    </div>
  );
};

export default WeatherApp;
