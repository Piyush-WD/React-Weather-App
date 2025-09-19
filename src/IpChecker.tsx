import React, { useEffect, useState } from "react";

const IpChecker: React.FC = () => {
  const [ip, setIp] = useState<string>("");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setIp(data.ip);
      } catch (err) {
        console.error("Error fetching IP:", err);
      }
    };

    fetchIP();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Your IP Address:</h2>
      <p style={{ fontSize: "1.5rem", color: "blue" }}>{ip || "Fetching..."}</p>
    </div>
  );
};

export default IpChecker;
