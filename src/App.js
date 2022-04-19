import Country from "./components/Country";
import Header from "./components/Header";
import Context from "./Context";
import { useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  return (
    <div>
      <Context.Provider value={theme}>
        <div
          className={
            theme ? "background-switcher very-dark-blue" : "background-switcher"
          }
        >
          <Header toggleTheme={toggleTheme}></Header>
          <Country></Country>;
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
