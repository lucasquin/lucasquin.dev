<script lang="ts">
  import Footer, { type IFooter } from "$lib/components/Footer.svelte";
  import Header, { type IHeader } from "$lib/components/Header.svelte";
  import "../app.css";

  const header: IHeader = {
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

  const footer: IFooter = {
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
  <Header props={header} />
  <slot />
</main>
<Footer props={footer} />
