import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Homepage from "./pages/Homepage/Homepage";
import Coffee from "./pages/Coffee/Coffee";
import Eat from "./pages/Eat/Eat";
import Drink from "./pages/Drink/Drink";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="coffee" element={<Coffee />}></Route>
        <Route path="eat" element={<Eat />}></Route>
        <Route path="drink" element={<Drink />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
