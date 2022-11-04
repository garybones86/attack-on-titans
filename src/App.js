import "./App.css";
import axios from "axios";
import Header from "./components/Header.js";
import React, { useState, useEffect } from "react";
import Charactercards from "./components/Charactercards";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`v1/titans?name=${query}`);

      let pics = [
        "https://64.media.tumblr.com/800e631d6513cc1912ee81e5e69bceed/tumblr_pe2yhuJiAm1u9of0co3_540.gifv",
        "http://24.media.tumblr.com/68888ada24fb08ef206c2300ad3ef0fd/tumblr_munivtTC671qcnw30o1_500.gif",
        "https://media3.giphy.com/media/3o7bugwhhJE9WhxkYw/giphy.gif?cid=ecf05e478wfgr8yjmue0hpxqxln1k2wu76um4qihvsjjwrlp&rid=giphy.gif&ct=g",
        "https://pa1.narvii.com/6444/c57ff136de7c3ac0236dd5fcea0956f4db667c4c_hq.gif",
        "https://64.media.tumblr.com/d157977a6e136d27ffa1eb4653347bc0/1ec6ffc63418b1d4-b9/s640x960/38aad09448e4173d62da850cc0b257275ce9611e.gif",
        "https://i.pinimg.com/originals/da/58/91/da58916806de6692a2de14f81116f3fd.gif",
        "https://i.pinimg.com/originals/96/ce/7d/96ce7d4102b3626ec2c9a71b00ce0867.gif",
        "https://media.tenor.com/7Dd4JWf_sI4AAAAC/attack-on-titan-jaw-titan.gif",
        "https://i.pinimg.com/originals/1f/b3/9a/1fb39aeec206926041a17c23990dd1cd.gif",
      ]

      let filteredResults = result.data.map((data, i) => {
        data.image = pics[i]
        return data
      })
      
      setItems(filteredResults);
    };

    fetchItems();
  }, []);

  // const queryFunction = (q) => {
  //   setQuery(q);
  // };

  if (!items) return;
  <h3></h3>;

  return (
    <div className="Countainer">
      <Header />
      <Search query={query} setQuery={setQuery} />

      {items.length > 0 && <Charactercards items={items} query={query} />}
    </div>
  );
}

export default App;
