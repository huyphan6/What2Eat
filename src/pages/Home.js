import React from "react";
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const homeStyle = {
    backgroundImage: "url(" + require("../images/food2.jpg") + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={homeStyle}>
      <Box display="flex" justifyContent="center"  mx={"auto"}>
        <Stack
          spacing={2}
          mx={4}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="h2" mb={2} mt={40} style={{fontWeight: 'bold', color: "#F5F5F4"}}>
            Welcome to What2Eat!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => navigate("/search")}>
              Find a restaurant
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/addNewRestaurant")}
            >
              Add a restaurant
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/restaurants")}
            >
              See current restaurants
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
