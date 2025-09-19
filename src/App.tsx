// import Message from "./Message";

// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// }

// export default App;

// --------------------------------------------------

// import ListGroup from "./Components/ListGroup";

// function App() {
//   return (
//     <div>
//       <ListGroup />
//     </div>
//   );
// }

// export default App;

// --------------------------------------------------

// import React, { useState } from "react";

// interface WeatherData {
//   name: string;
//   main: {
//     temp: number;
//   };
//   weather: {
//     description: string;
//   }[];
// }

// const WeatherApp: React.FC = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const apiKey = "c223b2098cd1e64f7ee38c83a5eb8117";

//   const fetchWeather = async () => {
//     try {
//       setError(null);
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       if (!response.ok) throw new Error("City not found");
//       const data: WeatherData = await response.json();
//       setWeather(data);
//     } catch (err: any) {
//       setWeather(null);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold mb-4">Weather App</h1>
//       <input
//         className="border p-2 rounded mb-2 w-64"
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={fetchWeather}
//       >
//         Get Weather
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {weather && (
//         <div className="mt-4 text-center">
//           <h2 className="text-xl font-semibold">{weather.name}</h2>
//           <p className="text-lg">🌡 {weather.main.temp}°C</p>
//           <p className="capitalize">🌥 {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;

// --------------------------------------------------

import React, { useState } from "react";

const icons: Record<string, string> = {
  Clouds: "src/assets/cloud.png",
  Clear: "src/assets/cloudy.png",
  Rain: "src/assets/rainy.png",
  Snow: "src/assets/snowflake.png",
  Mist: "src/assets/mist.png",
  Sunny: "src/assets/contrast.png",
};

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c223b2098cd1e64f7ee38c83a5eb8117&units=metric`
    );
    const data = await res.json();
    setWeather(data);
    console.log(JSON);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Check</button>

      {weather && weather.main && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].main}</p>
          {weather.weather[0].main && (
            <img src={icons[weather.weather[0].main]} style={{ height: 200 }} />
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

// --------------------------------------------------

// import React from "react";
// import IpChecker from "./IpChecker";

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>IP Address Checker</h1>
//       <IpChecker />
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------

// import React, { useState } from "react";

// const CounterApp: React.FC = () => {
//   const [count, setCount] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         minHeight: "100vh",
//         padding: "50px",
//         transition: "0.3s",
//         backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
//         color: darkMode ? "#ffffff" : "#000000",
//       }}
//     >
//       <h1>Counter App</h1>
//       <h2>{count}</h2>

//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       <br />
//       <br />
//       <button onClick={toggleTheme}>
//         {darkMode ? "Switch to Light Mode " : "Switch to Dark Mode "}
//       </button>
//     </div>
//   );
// };

// export default CounterApp;
