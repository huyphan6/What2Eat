import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Button, TextField, Stack, Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Carousel from "react-material-ui-carousel";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantDB = collection(db, "restaurants");

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getDocs(restaurantDB);
      setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRestaurants();
  }, []);

  const homeStyle = {
    backgroundImage: "url(" + require("../images/food5.jpg") + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={homeStyle}>
      <NavBar mb={20} />
      {restaurants.map((restaurants) => {
        return (
          <div>
            <Carousel>
              <Stack alignItems="flex-end" direction="column" mr={6}>
                <Typography variant="h6">Name: {restaurants.Name} </Typography>
                <Typography variant="h6"> Type: {restaurants.Type} </Typography>
                <Typography variant="h6">
                  Location: {restaurants.Location}
                </Typography>
                <Typography variant="h6">
                  
                  Hours: {restaurants.Hours}
                </Typography>
                <Typography variant="h6">
                  
                  Price: {restaurants.Price}
                </Typography>
              </Stack>
            </Carousel>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
