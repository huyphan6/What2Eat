import React from 'react'
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import NavBar from '../components/NavBar'

const Search = () => {
  return (
    <div>
    <Box display="flex" justifyContent="center" mt={5} mx={"auto"}>
        <NavBar />
      <Stack
        spacing={2}
        mx={4}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >

        <Typography variant="h6" mb={2}>
          What are you in the mood for today?
        </Typography>

        <TextField variant="outlined" label="Search By Type" />
        <TextField variant="outlined" label="Search By Location" />
        <TextField variant="outlined" label="Search By Hours" />

        <Button variant="contained">Find</Button>
      </Stack>
    </Box>
  </div>
  )
}

export default Search