<script lang="ts">
  import Footer from "./footer.svelte";
  import Header from "./header.svelte";
  import "../app.css";
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4x);
  }
</style>
