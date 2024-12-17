<script lang="ts">
	import { t } from '$lib/i18n/store';

	export let subtitle: string;
</script>

<section class="mb-8">
	<h2 class="mb-4 text-2xl font-bold">{$t(subtitle + '.subtitle')}</h2>
	<p class="leading-relaxed">{$t(subtitle + '.text')}</p>
</section>
