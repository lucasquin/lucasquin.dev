<script lang="ts">
  import LinkGroup, { type ILinkGroup } from "$lib/components/LinkGroup.svelte";
  import Summary, { type ISummary } from "$lib/components/Summary.svelte";
  import type { Link } from "$lib/types/Links";

  const summary: ISummary = {
    text: "List of My Favorite Podcasts in alphabetical order",
    ariaLabel: "Summary of the information"
  };

  const podcasts: Link[] = [
    {
      label: "Café Debug seu podcast de tecnologia",
      href: "https://open.spotify.com/show/3uqyj3GlhBHp1IJN8KJ1xU?si=c80b29717f14401b",
      target: "_blank",
      underline: true
    },
    {
      label: "Entre Chaves",
      href: "https://open.spotify.com/show/1ub9YZKamdMKdKbLia4YrX?si=dd57e91150c14ed3",
      target: "_blank",
      underline: true
    },
    {
      label: "Olá Gabs",
      href: "https://open.spotify.com/show/094hX276k5lFzM8Ig2xpsl?si=f84cc1a329ec4ff4",
      target: "_blank",
      underline: true
    },
    {
      label: "Akitando",
      href: "https://open.spotify.com/show/6w9Fcpu5argDMKw73eigwj?si=f85c851484564130",
      target: "_blank",
      underline: true
    }
  ];

  const podcastsList: ILinkGroup = {
    title: "Podcasts",
    row: false,
    links: podcasts.sort((a, b) => {
      const labelA = a.label.toLowerCase();
      const labelB = b.label.toLowerCase();

      if (labelA < labelB) return -1;
      if (labelA > labelB) return 1;
      return 0;
    })
  };
</script>

<Summary props={summary} />
<LinkGroup props={podcastsList} />
