<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import type FooterProps from "$lib/interfaces/FooterProps";
  import type HeaderProps from "$lib/interfaces/HeaderProps";
  import "../app.css";

  const headerProps: HeaderProps = {
    title: "LUCASQUIN'S WEBSITE",
    links: [
      {
        label: "ABOUT",
        href: "/about",
        target: "_self",
        underline: false
      },
      {
        label: "CONTACT",
        href: "/contact",
        target: "_self",
        underline: false
      },
      {
        label: "RSS",
        href: "/rss",
        target: "_blank",
        underline: false
      },
      {
        label: "$$$",
        href: "/sss",
        target: "_self",
        underline: false
      }
    ]
  };

  const footerProps: FooterProps = {
    year: new Date().getFullYear().toString(),
    links: [
      {
        label: "Github",
        href: "https://www.github.com/lucasquin",
        target: "_blank",
        underline: true
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lucasquin/",
        target: "_blank",
        underline: true
      }
    ]
  };
</script>

<main>
  <Header {headerProps} />
  <slot />
</main>
<Footer {footerProps} />
