import React from "react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import { Link, useLocation } from "react-router-dom";

export default function Home({ color }) {
  const location = useLocation();
  const path = location.pathname;
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionTitle color={color} title={t("Articles")} />
      <span>
        <time dateTime="11/06/2023">{t("2023/06/11")}</time>:{" "}
        <b>
          <Link to="articles/artigosinho">
            {t("Facing the rainy days and discovering the sunny days")}
          </Link>
        </b>
      </span>
    </SectionContainer>
  );
}
