import "./App.css";
import { Header, Sidebar, ChatScreen } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <ChatScreen />
    </div>
  );
}

export default App;
