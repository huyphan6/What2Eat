import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddRest from './pages/AddRest'

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header token={removeToken} /> */}
        <div className="Content">
          <Routes>
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}

            <Route path="/addNewRestaurant" element={ <AddRest />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App