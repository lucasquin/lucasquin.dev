import { useTranslation } from "react-i18next";
import VerticalLine from "../VerticalLine";
import "./index.css";

const Header = () => {
    const { t } = useTranslation();
    return (
        <div className="cssHeader">
            <header>
                <h1>LUCASQUIN'S WEBSITE</h1>
                <VerticalLine></VerticalLine>
                <nav>
                    <ul>
                        <li>{t("Home")}</li>
                        <li>{t("Projects")}</li>
                        <li>{t("Contact")}</li>
                        <li>{t("About")}</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
