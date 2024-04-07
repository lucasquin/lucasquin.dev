<script lang="ts">
  import LinkGroup, { type ILinkGroup } from "$lib/components/LinkGroup.svelte";
  import Summary, { type ISummary } from "$lib/components/Summary.svelte";
  import type { Link } from "$lib/types/Links";

  const summary: ISummary = {
    text: "List of My Favorite YouTube Programming Channels in alphabetical order",
    ariaLabel: "Summary of favorite YouTube programming channels"
  };

  const channels: Link[] = [
    {
      label: "mano deyvin",
      href: "https://www.youtube.com/@manodeyvin",
      target: "_blank",
      underline: true
    },
    {
      label: "Pedro Pessoa",
      href: "https://www.youtube.com/@phenpessoa",
      target: "_blank",
      underline: true
    },
    {
      label: "Fabio Akita",
      href: "https://www.youtube.com/@Akitando",
      target: "_blank",
      underline: true
    },
    {
      label: "Lucas Montano",
      href: "https://www.youtube.com/@LucasMontano",
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
  ];

  const channelsList: ILinkGroup = {
    title: "Channels",
    row: false,
    links: channels.sort((a, b) => {
      const labelA = a.label.toLowerCase();
      const labelB = b.label.toLowerCase();

      if (labelA < labelB) return -1;
      if (labelA > labelB) return 1;
      return 0;
    })
  };
</script>

<Summary props={summary} />
<LinkGroup props={channelsList} />
