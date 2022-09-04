import React from "react";
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box display="flex" justifyContent="center" mt={5} mx={"auto"}>
        <Stack
          spacing={2}
          mx={4}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="h2" mb={2}>
            Welcome to What2Eat!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => navigate("/search")}>
              Find a restaurant
            </Button>
            <Button variant="contained" onClick={() => navigate("/addNewRestaurant")}>Add a restaurant</Button>
            <Button variant="contained" onClick={() => navigate("/restaurants")}>See current restaurants</Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
