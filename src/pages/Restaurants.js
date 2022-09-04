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

  return (
    <div>
      <NavBar mb={20}/>
      {restaurants.map((restaurants) => {
        return (
          <div >
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="column"
              mx={2}
            >
              <Typography variant="h6"> Name: {restaurants.Name} </Typography>
              <Typography variant="h6"> Type: {restaurants.Type} </Typography>
              <Typography variant="h6">
                Location: {restaurants.Location}{" "}
              </Typography>
              <Typography variant="h6"> Hours: {restaurants.Hours} </Typography>
              <Typography variant="h6"> Price: {restaurants.Price} </Typography>
              <Typography>
                ------------------------------------------
              </Typography>
            </Stack>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
