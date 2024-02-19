<script lang="ts">
  import * as config from "$lib/config";
</script>

<a href="/">
  <h1>{config.header.title}</h1>
</a>
<nav>
  <ul>
    <li>
      <a href="/about">
        <p>{config.header.about}</p>
      </a>
    </li>
    <li>
      <a href="/contact">
        <p>{config.header.contact}</p>
      </a>
    </li>
    <li>
      <a href="/rss">
        <p>{config.header.rss}</p>
      </a>
    </li>
    <li>
      <a href="/sss">
        <p>{config.header.sss}</p>
      </a>
    </li>
  </ul>
</nav>
