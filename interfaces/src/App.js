import React from "react";
import { Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <LoginPage /> } />
      </Routes>
    );
  }
}

export default App;
