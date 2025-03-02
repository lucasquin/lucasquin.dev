<script lang="ts">
	import { t } from '$lib/i18n/store';
	import type { ISection } from '$lib/types';

	export let section: ISection;
</script>

<section class="mb-8">
	<h2 class="mb-4 text-2xl font-bold">{$t(section.subtitle)}</h2>
	{#if section.text}
		<p class="leading-relaxed">{$t(section.text)}</p>
	{/if}
</section>
