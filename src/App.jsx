import "./index.css"
import "./App.css"
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import About from "./noUserInfo/About";
import Login from "./noUserInfo/Login";
import SignUp from "./noUserInfo/SignUp";
import Contact from "./noUserInfo/Contact";
import Cart from "./noUserInfo/Cart"
import Home from "./noUserInfo/Home";
import Profile from "./noUserInfo/Profile"
import Header from "./Header";

// user imports
import UserHeader from "./user/UserHeader";
import UserCart from "./user/UserCart";
import UserProfile from "./user/UserProfile"


import AdminHome from "./admin/AdminHome"
import AdminProfile from "./admin/AdminProfile";





function App() {
  
  const [login, setLogin]=useState('')
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [userInfo, setUserInfo] = useState({})





  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((r) => r.json())
      .then(setCardList);
  }, []);


  function handleDeleteService(){
    setCart([])
    fetch(`http://localhost:3000/People/${userInfo.id}`,{
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({cart:[]})
    })
  }

  function addTooCart(add){
    setCart([...cart, add])
    alert('you have updated your cart')
    fetch(`http://localhost:3000/People/${userInfo.id}`,{
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({cart:[...cart, add]})
    })
  }

  function onSignOut(){
    setLogin('')
    setUserInfo({})
  }

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

  function handleLoginInfo(loginInfo){
    
    
    setLogin(login => (login+":"+loginInfo.uuid))

    setUserInfo(loginInfo)
    setCart(loginInfo.cart)

  }





  
  

  return (
    <div className="App">

      {/* <AdminHeader />
      <Switch>
        <Route path="/adminSignUp/">
          <AdminSignUp />
        </Route>



        <Route path="/adminLogin">
          <AdminLogin />
        </Route>

        <Route exact path="/adminContact">
          <AdminContact />
        </Route>

        <Route exact path="/adminCart">
          <AdminCart />
        </Route>

        <Route exact path="/adminAbout">
          <AdminAbout />
        </Route>


      </Switch> */}
    


    










{login ? <UserHeader login={login} onSignOut={onSignOut}/> : <Header/>}


    
      <Switch>

      <Route exact path="/psdkjfasposd">
          <AdminHome cardList={cardList}/>
        </Route>

        <Route exact path="/asdfjpwlks">
          <AdminProfile onSignOut={onSignOut}/>
        </Route>






      <Route exact path = {`/userCart/${login}`}>
        <UserCart  cart={cart} handleDeleteService ={handleDeleteService}
        userInfo={userInfo}
        />
      </Route>



      <Route exact path = {`/userProfile/${login}`}>
        <UserProfile userInfo={userInfo} 
          onSignOut={onSignOut}

        />
      </Route>









        <Route exact path="/signUp">
          <SignUp handleLoginInfo={handleLoginInfo} 
          />
        </Route>

        <Route exact path="/">
          <Home searchSubmit={searchSubmit} updatedCards={updatedCards}
          login={login}
        addTooCart= {addTooCart}
        userInfo={userInfo}
          />
        </Route>

        <Route exact path="/login">
          <Login handleLoginInfo={handleLoginInfo}/>
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
    }

export default App;
