import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import RestaurantsList from "./components/RestaurantsList";
import Restaurant from "./components/Restaurant";
import AddReview from "./components/AddReview";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate;

  async function login(user = null) {
    // navigate("/login");
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <p
                onClick={logout}
                className="nav-link d-inline m-0"
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </p>
            ) : (
              <Link
                to={"/login"}
                onClick={login}
                className="nav-link d-inline m-0"
              >
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<RestaurantsList />} />
          <Route
            path="/restaurants/:id/review"
            element={<AddReview user={user} />}
          />
          <Route path="/restaurants/:id" element={<Restaurant user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
