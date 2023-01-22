import SearchBar from "../SearchBar";
import MainPhoto from "../MainPhoto";
import CardList from "../CardList";

import { useState, useEffect } from "react";

function Home() {
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((r) => r.json())
      .then(setCardList);
  }, []);
  function searchSubmit(search) {
    setSearch(search)
  }

  const updatedCards = cardList.filter((card) => {
    const upperCaseName = card.name.toUpperCase();
    const upperCaseSearch = search.toUpperCase();
    if (upperCaseSearch === "") {
      return true;
    }
    if (upperCaseName.includes(upperCaseSearch)) {
      return true;
    }
  });

  return (
    <div>
      <MainPhoto />
      <SearchBar searchSubmit={searchSubmit} />
      <CardList cardList={updatedCards} />
    </div>
  );
}

export default Home;
