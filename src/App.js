import { Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
//import PokeList from "./componenets/PokeList/PokeList";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/content">
            <Content />
          </Route>
          <Route exact path="/newsletter">
            <Newsletter />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
