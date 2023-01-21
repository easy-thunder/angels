import "./App.css";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import About from "./assets/About";
import Login from "./assets/Login";
import SignUp from "./assets/SignUp";
import Contact from "./assets/Contact";
import Cart from "./assets/Cart";
import Home from "./assets/Home";
import Profile from "./assets/Profile"
function App() {
  return (
    <div className="App">
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
