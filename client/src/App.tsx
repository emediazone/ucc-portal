import { Switch, Route } from "wouter";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
