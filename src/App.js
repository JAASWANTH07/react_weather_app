import axios from "axios";
import { useState } from 'react';

function App() {
    const [deg, setDeg] = useState("0");
    const [city, setCity] = useState("France");
    const [desc, setDesc] = useState("Raining");
    const [enteredCity, setEnteredCity] = useState("");

    function getData() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=2596d1d471aea4eaeefe791a587b19b0`);
        weather.then(function (weather) {
            setDeg(weather.data.main.temp);
            setCity(weather.data.name);
            setDesc(weather.data.weather[0].main);
            setEnteredCity(""); 
        }).catch(function(){
            alert("Please Enter a Valid City Name")
        })
    }

    function handleInput(event) {
        setEnteredCity(event.target.value);
    }

    return (
        <div className="flex flex-row justify-center h-screen items-center">
            <div style={{
                backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.8), 0 10px 25px rgba(0, 0, 0, 0.3)",
                padding: "2rem",
                borderRadius: "10px",
                width: "400px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <h2 className="font-medium text-3xl">Hey! ⛅</h2>
                <p className="text-lg m-2">Do you want to know the weather Report :</p>
                <input
                    onChange={handleInput}
                    type="text"
                    className="rounded-md h-8 text-base w-5/6 mt-2 p-2 outline-none"
                    placeholder="City Name?"
                    value={enteredCity} // Set value prop to keep the input controlled
                />
                <br />
                <button
                    type="button"
                    onClick={getData}
                    className="bg-black text-white rounded-xl pt-2 pb-2 pl-4 pr-4 text-lg"
                >
                    Get Report ⚡
                </button>
                <p className="text-lg mt-3">Degree: {deg} | City: {city} | Weather: {desc}</p>
            </div>
        </div>
    );
}

export default App;
