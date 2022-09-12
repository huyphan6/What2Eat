import React from "react";
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import NavBar from "../components/NavBar";
import { db } from "../firebase-config";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  QuerySnapshot,
  where,
  getDocs,
} from "firebase/firestore";

const Search = () => {
  const restaurantDB = collection(db, "restaurants");
  const [userInput, setUserInput] = React.useState("");
  const [results, setResults] = React.useState([]);

  // queries
  const q = query(restaurantDB, where("Type", "==", userInput));

  const snapshot = async () => {
    const res = await getDocs(q);
    setResults(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(res.docs[0].data())
  };

  const homeStyle = {
    backgroundImage: "url(" + require("../images/food6.jpg") + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={homeStyle}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mx={"auto"}
      >
        <NavBar fullwidth alignItems="center" />
        <Stack
          spacing={2}
          mt={4}
          mx={4}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="h2">I'm in the mood for</Typography>

          <TextField
            variant="outlined"
            label="Insert Type"
            mb={2}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />

          <Button
            variant="contained"
            mt={4}
            size="large"
            sx={{ fontSize: 18 }}
            onClick={snapshot}
          >
            Find
          </Button>

          {results.map((results) => {
            return (
              <div>
                <Stack alignItems="flex-end" direction="column" mx={10}>
                  <Typography variant="h6"> Name: {results.Name} </Typography>
                  <Typography variant="h6"> Type: {results.Type} </Typography>
                  <Typography variant="h6">
                    {" "}
                    Location: {results.Location}{" "}
                  </Typography>
                  <Typography variant="h6"> Hours: {results.Hours} </Typography>
                  <Typography variant="h6"> Price: {results.Price} </Typography>
                </Stack>
              </div>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Search;
