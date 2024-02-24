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
        target: "_self"
      },
      {
        label: "CONTACT",
        href: "/contact",
        target: "_self"
      },
      {
        label: "RSS",
        href: "/rss",
        target: "_blank"
      },
      {
        label: "$$$",
        href: "/sss",
        target: "_self"
      }
    ]
  };

  const footerProps: FooterProps = {
    year: new Date().getFullYear().toString(),
    links: [
      {
        label: "Github",
        href: "https://www.github.com/lucasquin",
        target: "_blank"
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lucasquin/",
        target: "_blank"
      }
    ]
  };
</script>

<Header {headerProps} />
<main>
  <slot />
</main>
<Footer {footerProps} />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4x);
  }
</style>
