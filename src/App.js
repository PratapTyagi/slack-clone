import "./App.css";
import { Login, Header, Sidebar, ChatScreen } from "./components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Router>
            <div className="app__main">
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <h1>Welcome Page</h1>
                </Route>
                <Route path="/room/:roomId">
                  <ChatScreen />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
