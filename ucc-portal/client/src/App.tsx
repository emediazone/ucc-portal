import { Switch, Route } from "wouter";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route>
        {() => (
          <div className="min-h-screen w-full flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-2">404 - Page Not Found</h1>
              <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
            </div>
          </div>
        )}
      </Route>
    </Switch>
  );
}

export default App;
