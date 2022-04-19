import "./Header.css";
import moon from "../img/moon-regular.svg";
import { useContext } from "react";
import Context from "../Context";

function Header(props) {
  const theme = useContext(Context);
  return (
    <div className={theme ? "header dark-blue" : "header"}>
      <h3>Where in the world?</h3>
      <button onClick={props.toggleTheme}>
        <img src={moon} alt="moon" className="moon" />
        {theme ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

export default Header;
