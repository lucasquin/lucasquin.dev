<script lang="ts">
  import type FooterProps from "$lib/interfaces/FooterProps";

  export let footerProps: FooterProps;
</script>

<footer>
  <p>{footerProps.year}</p>
  <nav>
    <ul>
      {#each footerProps.links as link}
        <li>
          <a href={link.href} target={link.target}>
            <p>{link.label}</p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</footer>

<style>
  footer {
    border-top: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    justify-content: space-between;
    padding-top: var(--spacing);
  }

  ul {
    display: flex;
    gap: var(--spacing-2x);
  }
</style>
