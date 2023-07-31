import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

const Projects = ({ color }) => {
  const { t } = useTranslation();
  return (
    <SectionContainer>
      <SectionTitle color={color} title={t("About")} />
    </SectionContainer>
  );
};

export default Projects;
