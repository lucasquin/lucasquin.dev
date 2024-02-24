<script lang="ts">
  import type FooterProps from "$lib/interfaces/FooterProps";
  import LinkGroup from "./LinkGroup.svelte";
  export let footerProps: FooterProps;

  const props = {
    links: footerProps.links,
    row: true,
  };

</script>

<footer>
  <p>{footerProps.year}</p>
  <nav>
    <LinkGroup linkGroupProps={props} />
  </nav>
</footer>

<style>
  footer {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    padding-top: var(--spacing);
  }
</style>
