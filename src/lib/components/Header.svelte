<script lang="ts">
  import type HeaderProps from "$lib/interfaces/HeaderProps";
  import LinkGroup from "./LinkGroup.svelte";
  export let headerProps: HeaderProps;

  const props = {
    links: headerProps.links,
    row: true,
  };

</script>

<center>
  <div>
    <a href="/">
      <h1>{headerProps.title}</h1>
    </a>
    <nav>
      <LinkGroup linkGroupProps={props} />
    </nav>
  </div>
</center>

<style>
  div {
    width: max-content;
  }
</style>
