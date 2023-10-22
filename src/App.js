import CounterPage from "./CounterPage";
import Hero from "./Hero";
import PageError from "./PageError";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
//import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//import ErrorFallback from "./ErrorFallback";
function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  textDecorationColor: "white",
                  color: "white",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/counter"
              >
                BBWande Counter App
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/error"
              >
                Error Boundary
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }} to="*">
                Page 404
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="my-title">BBWande Counter App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route
            path="/error"
            element={
              <ErrorBoundary>
                <Hero heroName={"Joker"} />
              </ErrorBoundary>
            }
          />

          {/* <Route
            path="/error"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => console.log("reset")}>
                <Hero heroName={"Joker"} />
              </ErrorBoundary>
            }
          /> */}

          <Route path="*" element={<PageError />} />
        </Routes>
        <footer style={{ color: "white" }} className="text-center">
          <p className="text-white">BBWande © 2023.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
