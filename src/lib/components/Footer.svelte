<script lang="ts">
  import type FooterProps from "$lib/interfaces/FooterProps";

  export let footerProps: FooterProps;
</script>

<footer>
  <hr />
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
