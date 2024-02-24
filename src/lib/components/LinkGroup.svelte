<script lang="ts">
  import type LinkGroupProps from "$lib/interfaces/LinkGroupProps";

  export let linkGroupProps: LinkGroupProps;
</script>

<section>
  <h2>{linkGroupProps.title}</h2>
  <ul>
    {#each linkGroupProps.links as link}
      <li>
        <a href={link.href} target={link.target}>
          <p>
            {#if link.date}
              {link.date}: <b>{link.label}</b>
            {:else}
              {link.label}
            {/if}
          </p></a
        >
      </li>
    {/each}
  </ul>
</section>

<style>
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
