<script lang="ts" context="module">
  export interface ISummary {
    text: string;
    ariaLabel: string;
  }
</script>

<script lang="ts">
  export let props: ISummary;
</script>

<section>
  <summary aria-label={props.ariaLabel}>{props.text}</summary>
</section>
