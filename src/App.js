import "./App.css";
import About from "./components/About/About";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
import { Switch, Route } from "react-router-dom";
import PokeList from "./components/PokeList/PokeList";
import PokeAbilities from "./components/PokeAbilities/PokeAbilities";

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

          <Route exact path="/pokemons" component={PokeList} />
          <Route exact path="/pokemons/:id" component={PokeAbilities} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
