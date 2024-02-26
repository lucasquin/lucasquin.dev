<script lang="ts" context="module">
  export interface IHeader {
    title: string;
    links: Link[];
  }
</script>

<script lang="ts">
  import type { Link } from "$lib/types/Links";
  import LinkGroup, { type ILinkGroup } from "./LinkGroup.svelte";

  export let props: IHeader;

  const linkGroup: ILinkGroup = {
    links: props.links,
    row: true
  };
</script>

<center>
  <div>
    <a href="/">
      <h1>{props.title}</h1>
    </a>
    <nav>
      <LinkGroup props={linkGroup} />
    </nav>
  </div>
</center>

<style>
  div {
    width: max-content;
  }

</style>
