<script lang="ts" context="module">
  export interface IFooter {
    year: string;
    links: Link[];
  }
</script>

<script lang="ts">
  import type { Link } from "$lib/types/Links";
  import LinkGroup, { type ILinkGroup } from "./LinkGroup.svelte";

  export let props: IFooter;

  const linkGroup: ILinkGroup = {
    links: props.links,
    row: true
  };
</script>

<footer>
  <p>{props.year}</p>
  <nav>
    <LinkGroup props={linkGroup} />
  </nav>
</footer>

<style>
</style>
