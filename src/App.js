import AppCSS from "./App.module.css";
import react from "react";
import { Home, Header } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router><div className="bg">
      <Header />
      <Home />
      </div>
    </Router>
  );
}

export default App;
