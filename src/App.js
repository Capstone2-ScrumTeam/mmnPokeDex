import Pokedex from "./componenets/Pokedex/Pokedex";
import "./App.css";
import About from "./components/About/About";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>MMN Pokedex!</h1>

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
          <Route exact path="/pokemons">
            <Redirect to="/" />
          </Route>
          <Route path="/pokemons/:id" component={Pokedex} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
