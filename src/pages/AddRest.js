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
import { Button, TextField, Stack, Box } from "@mui/material";
import NavBar from "../components/NavBar";

const AddRest = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantDB = collection(db, "restaurants");

  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newHours, setNewHours] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getDocs(restaurantDB);
      setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRestaurants();
  }, []);

  const createRestaurant = async () => {
    try {
      await addDoc(restaurantDB, {
        Name: newName,
        Type: newType,
        Location: newLocation,
        Hours: newHours,
        Price: newPrice,
      });
      console.log("Restaurant created sucessfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
        <NavBar/>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt={5}
        mx={"auto"}
      >
        <Stack
          spacing={2}
          mx={4}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <TextField
            variant="outlined"
            label="Name"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Type"
            onChange={(e) => {
              setNewType(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Location"
            onChange={(e) => {
              setNewLocation(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Hours"
            onChange={(e) => {
              setNewHours(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Price"
            onChange={(e) => {
              setNewPrice(e.target.value);
            }}
          />

          <Button onClick={createRestaurant} variant="contained">
            Add restaurant
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddRest;
