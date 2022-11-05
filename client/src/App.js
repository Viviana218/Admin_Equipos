import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManagePlayerPage from "./Componentes/Pages/ManagePlayerPage/ManagePlayerPage";
import NewPlayerPage from "./Componentes/Pages/NewPlayerPage/NewPlayerPage";
import WelcomePage from "./Componentes/Pages/WelcomePage/WelcomePage";



function App() {
  return (
    <div className="container">

      <BrowserRouter>

        <Switch>
          <Route path="/players/list" exact render={() => <WelcomePage />} />
          <Route path="/players/addplayer" exact render={() => <NewPlayerPage />} />
          <Route path="/status/game/:id" exact render={(routeProps) => <ManagePlayerPage {...routeProps} />} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;