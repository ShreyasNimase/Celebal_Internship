import "./App.css";
import { useState } from "react";
import Text from "./components/Text";
import { useEffect } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show text
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
