import React from "react";
import { Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RandomUsersPage from "./pages/RandomUsersPage";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <LoginPage /> } />
        <Route exact path="/users" element={ <RandomUsersPage /> } />
      </Routes>
    );
  }
}

export default App;
