import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { routes } from "./app/routes";
import Header from "./components/Header";
import DemoQuery from "./demo/DemoQuery";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
// history.push("/signin")

function App() {
  return (
    <HistoryRouter history={history}>
      <Header />

      <Routes>
        {routes.map(({ path: p, component: Component }) => (
          <Route key={p} path={p} element={<Component />}></Route>
        ))}

        <Route path="/demo-query/:title" element={<DemoQuery />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
