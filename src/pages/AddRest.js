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

  const clearForm = () => {
    setNewName("");
    setNewType("");
    setNewLocation("");
    setNewHours("");
    setNewPrice("");
    console.log("cleared form")
  }

  const refreshPage = () => {
    setTimeout(window.location.reload(), 5000);
  }

  const homeStyle = {
    backgroundImage: "url(" + require("../images/food3.jpg") + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

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
    <div className="App" style={homeStyle}>
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
          mt={20}
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
            value={newName}
          />
          <TextField
            variant="outlined"
            label="Type"
            onChange={(e) => {
              setNewType(e.target.value);
            }}
            value={newType}
          />
          <TextField
            variant="outlined"
            label="Location"
            onChange={(e) => {
              setNewLocation(e.target.value);
            }}
            value={newLocation}
          />
          <TextField
            variant="outlined"
            label="Hours"
            onChange={(e) => {
              setNewHours(e.target.value);
            }}
            value={newHours}
          />
          <TextField
            variant="outlined"
            label="Price"
            onChange={(e) => {
              setNewPrice(e.target.value);
            }}
            value={newPrice}
          />

          <Button onClick={() => {createRestaurant(); clearForm();}} variant="contained">
            Add restaurant
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddRest;
