import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {routes && routes.map((route) => <Route {...route} key={route.id} />)}
      </Routes>
    </Provider>
  );
}

export default App;
