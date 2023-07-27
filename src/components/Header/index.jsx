import React from "react";
import { useTranslation } from "react-i18next";
import VerticalLine from "../VerticalLine";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;

  const paths = {
    home: "/",
    projects: "/projects",
    contact: "/contact",
    about: "/about",
  };

  return (
    <div className="cssHeader">
      <header>
        <h1
          style={
            paths.home == path
              ? {
                  color: "var(--green)",
                }
              : paths.projects == path
              ? {
                  color: "var(--pink)",
                }
              : paths.contact == path
              ? {
                  color: "var(--cyan)",
                }
              : paths.about == path
              ? {
                  color: "var(--violet)",
                }
              : {
                  color: "var(--unselected)",
                }
          }
        >
          <b>LUCASQUIN'S WEBSITE</b>
        </h1>
        <VerticalLine />
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                style={
                  paths.home === path
                    ? {
                        color: "var(--green)",
                        fontWeight: "600",
                      }
                    : {
                        color: "var(--unselected)",
                        fontWeight: "400",
                      }
                }
              >
                {t("Home")}
              </Link>
              {paths.home === path ? (
                <VerticalLine color={"var(--green)"} />
              ) : null}
            </li>
            <li>
              <Link
                to="/projects"
                style={
                  paths.projects === path
                    ? {
                        color: "var(--pink)",
                        fontWeight: "600",
                      }
                    : {
                        color: "var(--unselected)",
                        fontWeight: "400",
                      }
                }
              >
                {t("Projects")}
              </Link>
              {paths.projects === path ? (
                <VerticalLine color={"var(--pink)"} />
              ) : null}
            </li>
            <li>
              <Link
                to="/contact"
                style={
                  paths.contact === path
                    ? {
                        color: "var(--cyan)",
                        fontWeight: "600",
                      }
                    : {
                        color: "var(--unselected)",
                        fontWeight: "400",
                      }
                }
              >
                {t("Contact")}
              </Link>
              {paths.contact === path ? (
                <VerticalLine color={"var(--cyan)"} />
              ) : null}
            </li>
            <li>
              <Link
                to="/about"
                style={
                  paths.about === path
                    ? {
                        color: "var(--violet)",
                        fontWeight: "600",
                      }
                    : {
                        color: "var(--unselected)",
                        fontWeight: "400",
                      }
                }
              >
                {t("About")}
              </Link>
              {paths.about === path ? (
                <VerticalLine color={"var(--violet)"} />
              ) : null}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
