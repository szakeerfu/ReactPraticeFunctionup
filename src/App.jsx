import { useEffect, useState } from "react";
import EmojiData from "./emoji.json";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newdata = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newdata);
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <h1>Search Emoji's 😄</h1>
        <input
          style={{
            padding: "22px",
            width: "22vw",
            borderRadius: "22px",
            border: "none",
            fontSize:"22px"
          }}
          type="text"
          placeholder="search emoji "
          value={search}
          onChange={handleChange}
        />
        { search.length > 0 && data.map((emoji) => (
          <div className="card" key={emoji.title}>
            <div className="card-body">
              {emoji.symbol} {emoji.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

