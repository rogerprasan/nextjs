"use client";
import { useState, useEffect } from "react";

export default function Main() {
  const [data, setData] = useState("");
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/home");
        if (!res.ok) {
          setError("Error fetching data");
        }else{
        const { message } = await res.json();
        setData(message);
    }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="left">
        <h2>Prasanna raj</h2>
        <p className="font-title">Web developer</p>
      </div>
      <div className="right">
        <p>{data}</p>
        <p className="text-red-500">{error}</p>
      </div>
    </main>
  );
}
