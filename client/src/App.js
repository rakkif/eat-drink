import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Coffee from "./pages/Coffee/Coffee";
import Eat from "./pages/Eat/Eat";
import Drink from "./pages/Drink/Drink";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route path="coffee" element={<Coffee />}></Route>
      <Route path="eat" element={<Eat />}></Route>
      <Route path="drink" element={<Drink />}></Route>
    </Routes>
  );
};

export default App;
