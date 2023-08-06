import React from "react";
import { useTranslation } from "react-i18next";
import VerticalLine from "../VerticalLine";
import "./index.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "../../routes";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="cssHeader">
      <header>
        <h1
          style={
            routes.home == path
              ? {
                  color: "var(--green)",
                }
              : routes.projects == path
              ? {
                  color: "var(--pink)",
                }
              : routes.contact == path
              ? {
                  color: "var(--cyan)",
                }
              : routes.about == path
              ? {
                  color: "var(--violet)",
                }
              : {
                  color: "var(--unselected)",
                }
          }
          className="transition"
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
                  routes.home == path
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
              {routes.home === path ? (
                <VerticalLine color={"var(--green)"} />
              ) : null}
            </li>
            <li>
              <Link
                to="/projects"
                style={
                  routes.projects === path
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
              {routes.projects === path ? (
                <VerticalLine color={"var(--pink)"} />
              ) : null}
            </li>
            <li>
              <Link
                to="/contact"
                style={
                  routes.contact === path
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
              {routes.contact === path ? (
                <VerticalLine color={"var(--cyan)"} />
              ) : null}
            </li>
            <li>
              <Link
                to="/about"
                style={
                  routes.about === path
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
              {routes.about === path ? (
                <VerticalLine color={"var(--violet)"} />
              ) : null}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
