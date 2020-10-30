import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import { IconButton, TextField, InputAdornment, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function SearchCity() {
  const [city, setCity] = useState("");
  const [query, setquery] = useState("");
  const [data, setData] = useState({});

  const fetchDataWeather = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "http://api.weatherapi.com/v1/current.json",
        params: {
          q: query === "" ? "bandung" : query,
          key: "716c0a0d6c644eb7af3185204202810",
        },
      });
      const time = res.data.location.localtime.split(" ");
      setData({
        city: res.data.location.name,
        region: res.data.location.region,
        country: res.data.location.country,
        tempC: res.data.current.temp_c,
        tempF: res.data.current.temp_f,
        feelsC: res.data.current.feelslike_c,
        feelsF: res.data.current.feelslike_f,
        weather: res.data.current.condition.text,
        icon: res.data.current.condition.icon,
        time: time[1],
        date: time[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataWeather();
  }, [query]);

  const changeEvent = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setquery(city);
    setCity("");
  };
  return (
    <Fragment>
      <form>
        <TextField
          type="text"
          variant="outlined"
          label="Enter City"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setquery(city);
              setCity("");
            }
          }}
          onChange={changeEvent}
          value={city}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Grid container>{query && <WeatherData weather={data} />}</Grid>
    </Fragment>
  );
}

export default SearchCity;
