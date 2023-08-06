import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import SectionTitle from "../../components/SectionTitle";
import SectionContainer from "../../components/SectionContainer";

export default function About({ color }) {
  const { t } = useTranslation();
  return (
    <SectionContainer>
      <SectionTitle color={color} title={t("About")} />
    </SectionContainer>
  );
}
