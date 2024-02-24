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
              {link.date}
            {/if}
            {link.label}
          </p></a
        >
      </li>
    {/each}
  </ul>
</section>
