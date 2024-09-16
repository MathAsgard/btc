import { Navbar, Footer} from "./components/";
import { Home, Matches, Bet, NotFound } from "./pages/";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  document.title = "iBetcrypto";
   

    //<Router basename='/index.html'>
  return (
    <Router basename='/'>
      <Navbar />
      <div className="middlesec">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/matches" component={Matches} />
          <Route path="/bet" component={Bet} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
