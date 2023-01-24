import SearchBar from "../SearchBar";
import MainPhoto from "../MainPhoto";
import UserCardList from "../user/UserCardList";


function Home({searchSubmit, updatedCards, addTooCart, userInfo}) {




  return (
    <>
    <div>
      <MainPhoto />
      <h1>Services</h1>
      <SearchBar searchSubmit={searchSubmit} />
      <UserCardList cardList={updatedCards} addTooCart={addTooCart}
      userInfo={userInfo}
      />
    </div>
    </>
  );
}

export default Home;
