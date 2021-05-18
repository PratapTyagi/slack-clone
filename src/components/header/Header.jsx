import "./Header.css";
import { Schedule, HelpOutline, SearchOutlined } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Schedule />
      </div>
      <div className="header__search">
        <SearchOutlined />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
