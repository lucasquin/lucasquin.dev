<script lang="ts">
  import * as config from "$lib/config";
</script>

<footer>
  <p>My footer</p>
  <nav>
    <ul>
      <li>
        <a href={config.footer.githubUrl} target="_blank">
          <p>{config.footer.github}</p>
        </a>
        <a href="https://www.google.com" target="_blank">
          <p>{config.footer.currentYear}</p>
        </a>
      </li>
    </ul>
  </nav>
</footer>
