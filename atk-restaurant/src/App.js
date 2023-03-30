import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
// import styled from "styled-components";
// import { Link } from 'react-router-dom'
// import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}/>
        <h3>Delicious</h3>
      </Nav> */}
      <Navbar/>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

// const Logo = styled(Link)`
//   text-decoration: none;
//   font-size: 1.5rem;
//   font-weight: 400;
//   padding-right: 1rem;
// `
// const Nav = styled.div`
//   padding: 2rem 0rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   svg{
//     font-size: 2rem;
//   }
// `

export default App;
