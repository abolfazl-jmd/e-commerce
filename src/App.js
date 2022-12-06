import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";

function App() {
  return (
    <Routes>
      {routes && routes.map((route) => <Route {...route} key={route.id} />)}
    </Routes>
  );
}

export default App;
