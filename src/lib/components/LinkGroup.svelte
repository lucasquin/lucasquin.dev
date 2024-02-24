<script lang="ts">
  import type LinkGroupProps from "$lib/interfaces/LinkGroupProps";
  export let linkGroupProps: LinkGroupProps;
</script>

<section>
  {#if linkGroupProps.title && !linkGroupProps.row}
    <h2>{linkGroupProps.title}</h2>
  {/if}
  <ul class={linkGroupProps.row ? "row" : ""}>
    {#each linkGroupProps.links as link}
      <li>
        <a href={link.href} target={link.target} class={link.underline ? "underline" : ""}>
          <p>
            {#if link.date}
              {link.date}: <b>{link.label}</b>
            {:else}
              {link.label}
            {/if}
          </p>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .underline {
    text-decoration: underline dotted rgba(0, 0, 0, 0.3);
  }

  .row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: var(--spacing-2x);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  }

  @media screen and (max-width: 425px) {
    ul {
      gap: var(--spacing-2x);
    }
  }
</style>
