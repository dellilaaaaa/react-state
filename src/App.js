// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Login2 from "./components/Login2";
import Login from "./components/Login";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <div className="App">
        <h4> Selamat Datang guys!!!</h4>
        <h2> Ini Website Dellila </h2><br/>
        <Login />
        <br />
        <Login2 />
        <br />
        <Todo />
      </div>
    </Container>
  );
}
export default App;
