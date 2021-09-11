import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import AddNews from "./components/AddNews/AddNews";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/AddNews">
          <AddNews></AddNews>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
