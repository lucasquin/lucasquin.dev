<script lang="ts">
  import type SummaryProps from "$lib/interfaces/SummaryProps";

  export let summaryProps: SummaryProps;
</script>

<section>
  <summary aria-label={summaryProps.ariaLabel}>{summaryProps.text}</summary>
</section>

<style>
  summary {
    text-align: justify;
  }
</style>
