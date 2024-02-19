<script lang="ts">
  const lists: string[] = ["Item list", "Item list", "Item list", "Item list"];
  const posts: string[] = ["Item post", "Item post", "Item post", "Item post"];
</script>

<section>
  <summary>whatever description</summary>
</section>
<section>
  <h2>lists</h2>
  <ul>
    {#each lists as list, index}
      <li>
        <a href="https://www.google.com" target="_blank"> <p>{`${list} ${index}`}</p></a>
      </li>
    {/each}
  </ul>
</section>
<section>
  <h2>posts</h2>
  <ul>
    {#each posts as post, index}
      <li>
        <a href="https://www.google.com" target="_blank"> <p>{`${post} ${index}`}</p></a>
      </li>
    {/each}
  </ul>
</section>
