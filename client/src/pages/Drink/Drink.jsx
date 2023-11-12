import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Drink.scss";
import List from "../../components/List/List";

const API_URL = process.env.REACT_APP_API_URL;

const Drink = () => {
  const [drinkList, setDrinkList] = useState([]);
  useEffect(() => {
    const fetchDrink = async () => {
      axios
        .get(`${API_URL}/drink`)
        .then((res) => {
          setDrinkList(res.data);
        })
        .catch((err) => {
          console.log("eep");
        });
    };

    fetchDrink();
  }, []);
  return (
    <div className="body-drink">
      <List itemsList={drinkList} />
    </div>
  );
};
export default Drink;
