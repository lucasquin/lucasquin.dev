import VerticalLine from "../VerticalLine";
import { useTranslation } from "react-i18next";
import "./index.css";

const ListArticles = () => {
  const { t } = useTranslation();
  return (
    <div className="cssListArticles">
      <section>
        <h3>{t("Articles")}</h3>
        <VerticalLine></VerticalLine>

        <span>
          <time datetime="11/06/2023">{t("2023/06/11")}</time>:{" "}
          <b>
            <a href="">{t("Facing the rainy days and discovering the sunny days")}</a>
          </b>
        </span>

      </section>
    </div>
  );
};

export default ListArticles;
