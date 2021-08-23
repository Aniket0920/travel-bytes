import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getPlacesData } from "./../../api";
import List from "../List/List";
import Map from "../Map/Map";

const Explore = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  return (
    <>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default Explore;
