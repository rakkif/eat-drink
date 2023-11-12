import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Eat.scss";
import List from "../../components/List/List";

const API_URL = "http://localhost:5000";

const Eat = () => {
  const [eatList, setEatList] = useState([]);
  useEffect(() => {
    const fetchEat = async () => {
      axios
        .get(`${API_URL}/eat`)
        .then((res) => {
          setEatList(res.data);
        })
        .catch((err) => {
          console.log("eep");
        });
    };

    fetchEat();
  }, []);
  return (
    <div className="body-eat">
      <List itemsList={eatList} />
    </div>
  );
};

export default Eat;
