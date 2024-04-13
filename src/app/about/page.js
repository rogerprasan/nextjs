// pages/Home.js
"use client"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post("/api/about", { name: "hello" });

                if (res.status !== 200) {
                    throw new Error("Error fetching data");
                }

                const { message } = res.data;
                setData(message);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return <p>{data}</p>;
}
