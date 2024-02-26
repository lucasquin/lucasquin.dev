<script lang="ts" context="module">
  export interface ILinkGroup {
    title?: string; // Previous title for link
    row: boolean; // Render in row or column
    links: Link[]; // Links with label
  }
</script>

<script lang="ts">
  import type { Link } from "$lib/types/Links";

  export let props: ILinkGroup;
</script>

<section>
  {#if props.title && !props.row}
    <h3>{props.title}</h3>
  {/if}
  <ul class={props.row ? "row" : ""}>
    {#each props.links as link}
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

  li {
    list-style-type: none;
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
