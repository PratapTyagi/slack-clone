import "./App.css";
import { Header, Sidebar, ChatScreen } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <ChatScreen />
      </div>
    </div>
  );
}

export default App;
