<script lang="ts">
  import type HeaderProps from "$lib/interfaces/HeaderProps";

  export let headerProps: HeaderProps;
</script>

<a href="/">
  <h1>{headerProps.title}</h1>
</a>
<nav>
  <ul>
    {#each headerProps.links as link}
      <li>
        <a href={link.href} target={link.target}> <p>{link.label}</p> </a>
      </li>
    {/each}
  </ul>
</nav>
