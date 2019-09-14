import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://rick-api.herokuapp.com/api/")
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results)
      })
      .catch(err => {
        console.log('Error: ', err);
      });
    }, []);

  return (
    <section className="grid-view">
      {data.map((loc, index) => {
        return <LocationCard key={index} loc={loc} />
      })}
    </section>
  );
}
