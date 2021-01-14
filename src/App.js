import "./App.css";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Container from "@material-ui/core/Container";
import AddClients from "./components/client/AddClients";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Container fixed>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/client/add" component={AddClients} />

          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
