<script lang="ts">
  import type LinkGroupProps from "$lib/interfaces/LinkGroupProps";
  import LinkGroup from "$lib/components/LinkGroup.svelte";
  import type SummaryProps from "$lib/interfaces/SummaryProps";
  import Summary from "$lib/components/Summary.svelte";

  const summaryProps: SummaryProps = {
    text: "List of My Favorite YouTube Programming Channels in alphabetical order",
    ariaLabel: "Summary of the information"
  };

  const channels: LinkGroupProps = {
    title: "Channels",
    row: false,
    links: [
      {
        label: "Fabio Akita",
        href: "https://www.youtube.com/@Akitando",
        target: "_blank",
        underline: true
      },
      {
        label: "Lucas Montano",
        href: "/lists/list-of-awesome-talks",
        target: "_blank",
        underline: true
      },
      {
        label: "Guru da Ciência",
        href: "https://www.youtube.com/@DanielPetri",
        target: "_blank",
        underline: true
      },
      {
        label: "Willian Lin",
        href: "https://www.youtube.com/@tmwilliamlin168",
        target: "_blank",
        underline: true
      },
      {
        label: "Filipe Deschamps",
        href: "https://www.youtube.com/@FilipeDeschamps",
        target: "_blank",
        underline: true
      },
      {
        label: "devaslife ",
        href: "https://www.youtube.com/@devaslife",
        target: "_blank",
        underline: true
      },
      {
        label: "Elijah Manor",
        href: "https://www.youtube.com/@ElijahManor",
        target: "_blank",
        underline: true
      },
      {
        label: "Asahi Lina / 朝日リナ",
        href: "https://www.youtube.com/@AsahiLina",
        target: "_blank",
        underline: true
      },
      {
        label: "ThePrimeagen",
        href: "https://www.youtube.com/@ThePrimeagen",
        target: "_blank",
        underline: true
      },
      {
        label: "chris@machine",
        href: "https://www.youtube.com/@chrisatmachine",
        target: "_blank",
        underline: true
      },
      {
        label: "Código Fonte TV",
        href: "https://www.youtube.com/@codigofontetv",
        target: "_blank",
        underline: true
      },
      {
        label: "typecraft",
        href: "https://www.youtube.com/@typecraft_dev",
        target: "_blank",
        underline: true
      },
      {
        label: "Universo Programado",
        href: "https://www.youtube.com/@UniversoProgramado",
        target: "_blank",
        underline: true
      },
      {
        label: "Fernanda Kipper | Dev",
        href: "https://www.youtube.com/@kipperdev",
        target: "_blank",
        underline: true
      },
      {
        label: "Filho da Nuvem",
        href: "https://www.youtube.com/@Filhodanuvem",
        target: "_blank",
        underline: true
      },
      {
        label: "Arthur 404 dev",
        href: "https://www.youtube.com/@Arthur404dev",
        target: "_blank",
        underline: true
      }
    ]
  };
</script>

<Summary {summaryProps} />
<LinkGroup linkGroupProps={channels} />
