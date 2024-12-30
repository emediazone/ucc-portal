import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ConfigWizard from "@/pages/ConfigWizard";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/config" component={ConfigWizard} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;