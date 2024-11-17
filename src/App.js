import "./index.css";
import Body from "./pages/Body";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Body />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Nav />
                <SearchPage />
              </>
            }
          />
        </Routes>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
