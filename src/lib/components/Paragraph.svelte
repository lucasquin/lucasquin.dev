<script lang="ts" context="module">
  export interface IParagraph {
    title: string; // Previous title for link
    text: string; // Render in row or column
  }
</script>

<script lang="ts">
  export let props: IParagraph[];
</script>

{#each props as item}
  <section>
    <h3>{item.title}</h3>
    <p>{item.text}</p>
  </section>
{/each}
