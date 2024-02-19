import { dev } from "$app/environment"

export const titlePage: string = "LUCASQUIN'S WEBSITE"
export const url: string = dev ? "http://localhost:5173" : "https://lucasquin.dev"

type Header = {
  title: string,
  about: string,
  rss: string,
  contact: string,
  sss: string
}

export const header: Header = {
  title: "LUCASQUIN'S WEBSITE",
  about: "ABOUT",
  rss: "RSS",
  contact: "CONTACT",
  sss: "$$$"
}

type Footer = {
  github: string,
  githubUrl: string
  currentYear: number
}

export const footer: Footer = {
  github: "Github",
  githubUrl: "https://www.github.com/lucasquin/lucasquin.dev",
  currentYear: new Date().getFullYear()
}
