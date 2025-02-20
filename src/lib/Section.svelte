<script lang="ts">
	import { t } from '$lib/i18n/store';

	export let subtitle: string;
	export let text: string | null = null;
</script>

<section class="mb-8">
	<h2 class="mb-4 text-2xl font-bold">{$t(subtitle)}</h2>
	{#if text}
		<p class="leading-relaxed">{$t(text)}</p>
	{/if}
</section>
