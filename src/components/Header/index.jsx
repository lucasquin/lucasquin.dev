import { useTranslation } from "react-i18next";
import VerticalLine from "../VerticalLine";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="cssHeader">
      <header>
        <h1>LUCASQUIN'S WEBSITE</h1>
        <VerticalLine/>
        <nav>
          <ul>
            <li>
              <Link to="/">{t("Home")}</Link>
              <VerticalLine/>
            </li>
            <li>
              <Link to="/projects">{t("Projects")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("Contact")}</Link>
            </li>
            <li>
              <Link to="/about">{t("About")}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
