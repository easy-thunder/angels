import "./App.css";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import About from "./noUserInfo/About";
import Login from "./noUserInfo/Login";
import SignUp from "./noUserInfo/SignUp";
import Contact from "./noUserInfo/Contact";
import Cart from "./noUserInfo/Cart";
import Home from "./noUserInfo/Home";
import Profile from "./noUserInfo/Profile"





function App() {
  return (
    <div className="App">

      <AdminHeader />
      <Switch>
        <Route path="/adminSignUp/">
          <AdminSignUp />
        </Route>

        <Route exact path="/admin">
          <AdminHome />
        </Route>

        <Route path="/adminLogin">
          <adminLogin />
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

        <Route exact path="/adminProfile">
          <AdminProfile />
        </Route>
      </Switch>
    
    













    
      <Header />
      <Switch>
        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
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
