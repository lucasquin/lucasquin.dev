import React from "react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import "./index.css";

const Contact = ({ color }) => {
  const { t } = useTranslation();
  return (
    <SectionContainer>
      <SectionTitle color={color} title={t("Contact")} />
    </SectionContainer>
  );
};

export default Contact;
