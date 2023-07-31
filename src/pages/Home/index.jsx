import React from "react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

const Home = ({ color }) => {
  const { t } = useTranslation();
  return (
    <SectionContainer>
      <SectionTitle color={color} title={t("Articles")} />
      <span>
        <time dateTime="11/06/2023">{t("2023/06/11")}</time>:{" "}
        <b>
          <a href="">
            {t("Facing the rainy days and discovering the sunny days")}
          </a>
        </b>
      </span>
    </SectionContainer>
  );
};

export default Home;
