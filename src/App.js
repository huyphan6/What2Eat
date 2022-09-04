import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddRest from './pages/AddRest'
import Home from './pages/Home'
import Search from './pages/Search'
import Restaurants from './pages/Restaurants'

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header token={removeToken} /> */}
        <div className="Content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/addNewRestaurant" element={ <AddRest />} />
            <Route path="/home" element={ <Home />} />
            <Route path="/search" element={ <Search />} />
            <Route path="/restaurants" element={ <Restaurants />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App