import "./Header.css";
import moon from "../img/moon-regular.svg";

function Header() {
  return (
    <div className="header">
      <h3>Where in the world?</h3>
      <button>
        <img src={moon} alt="moon" className="moon" /> Dark Mode
      </button>
    </div>
  );
}

export default Header;
