<script lang="ts">
  import type LinkGroupProps from "$lib/interfaces/LinkGroupProps";
  import LinkGroup from "$lib/components/LinkGroup.svelte";
  import type SummaryProps from "$lib/interfaces/SummaryProps";
  import Summary from "$lib/components/Summary.svelte";

  const summaryProps: SummaryProps = {
    text: "List of my favorite YouTube programming channels",
    ariaLabel: "Summary of the information"
  };

  const channels: LinkGroupProps = {
    title: "Channels",
    links: [
      {
        label: "Fabio Akita",
        href: "https://www.youtube.com/@Akitando",
        target: "_blank"
      },
      {
        label: "Lucas Montano",
        href: "/lists/list-of-awesome-talks",
        target: "_blank"
      },
      {
        label: "Guru da Ciência",
        href: "https://www.youtube.com/@DanielPetri",
        target: "_blank"
      },
      {
        label: "Willian Lin",
        href: "https://www.youtube.com/@tmwilliamlin168",
        target: "_blank"
      },
      {
        label: "Filipe Deschamps",
        href: "https://www.youtube.com/@FilipeDeschamps",
        target: "_blank"
      },
      {
        label: "devaslife ",
        href: "https://www.youtube.com/@devaslife",
        target: "_blank"
      },
      {
        label: "Elijah Manor",
        href: "https://www.youtube.com/@ElijahManor",
        target: "_blank"
      },
      {
        label: "Asahi Lina / 朝日リナ",
        href: "https://www.youtube.com/@AsahiLina",
        target: "_blank"
      },
      {
        label: "ThePrimeagen",
        href: "https://www.youtube.com/@ThePrimeagen",
        target: "_blank"
      },
      {
        label: "chris@machine",
        href: "https://www.youtube.com/@chrisatmachine",
        target: "_blank"
      },
      {
        label: "Código Fonte TV",
        href: "https://www.youtube.com/@codigofontetv",
        target: "_blank"
      },
      {
        label: "typecraft",
        href: "https://www.youtube.com/@typecraft_dev",
        target: "_blank"
      },
      {
        label: "Universo Programado",
        href: "https://www.youtube.com/@UniversoProgramado",
        target: "_blank"
      },
      {
        label: "Fernanda Kipper | Dev",
        href: "https://www.youtube.com/@kipperdev",
        target: "_blank"
      },
      {
        label: "Filho da Nuvem",
        href: "https://www.youtube.com/@Filhodanuvem",
        target: "_blank"
      },
      {
        label: "Arthur 404 dev",
        href: "https://www.youtube.com/@Arthur404dev",
        target: "_blank"
      }
    ]
  };
</script>

<Summary {summaryProps} />
<LinkGroup linkGroupProps={channels} />
