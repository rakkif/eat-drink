import React from "react";
import axios from "axios";
import List from "../../components/List/List";
import { useEffect, useState } from "react";
import "./Coffee.scss";

const API_URL = "http://localhost:5000";

const Coffee = () => {
  const [coffeeList, setCoffeeList] = useState([]);
  useEffect(() => {
    const fetchCoffee = async () => {
      axios
        .get(`${API_URL}/coffee`)
        .then((res) => {
          setCoffeeList(res.data);
        })
        .catch((err) => {
          console.log("eep");
        });
    };

    fetchCoffee();
  }, []);
  return (
    <div className="body">
      <List itemsList={coffeeList} />
    </div>
  );
};

export default Coffee;
