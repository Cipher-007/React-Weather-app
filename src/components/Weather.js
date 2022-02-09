import axios from "axios";
import React, { useState, useEffect} from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "";
  // async function weatherData(e) {
  //   e.preventDefault();
  //   if (form.city == "") {
  //     alert("Add values");
  //   } else {
  //     const data = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
  //     )
  //       .then((res) =>);
  //     setWeather({ data: data });
  //   }
  // }

  async function weatherData(e){
    e.preventDefault()
      try {
        const data = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
      
       .then(res=>
        res.data
       )
       setWeather({ data: data });
      } catch (error) {
        console.error(error.message);
      }
   
    }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  const myStyle={
    backgroundImage: 
"url('https://i.imgur.com/l9R2kSG.jpeg')",
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="weather"  style={myStyle}>
      <div className="logo">
      </div>
      <span className="title">Weather</span>
      <br />
      <form>
        <div>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        </div>
       
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
