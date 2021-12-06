import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { CharacterDetails } from "./components/characterDetails";
import { Suggestion } from "./components/suggestion";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [characters, setCharacters] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (!searchInput) {
          return null;
        } else {
          setCharacters(data.results);
        }
      });
  }, [searchInput]);

  const submitSearch = () => {
    navigate("/");
  };

  const clearSearch = () => {
    setSearchInput("");
    setCharacters([]);
    navigate("/");
  };

  return (
    <div className="app">
      <div className="wrap">
        <div className="search">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button onClick={submitSearch} type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>

          <Link
            onClick={clearSearch}
            style={{ color: "#00b4cc" }}
            to="/"
            className="back"
          >
            <i className="fa fa-arrow-left fa-2x"></i>
          </Link>
          {/* {searchInput && characters && (
            <div className="suggestions">
              <Suggestion characters={characters.slice(0, 10)} />
            </div>
          )} */}
          <Routes>
            <Route
              path="/"
              element={searchInput && <Suggestion characters={characters} />}
            />
            <Route path="/:id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
