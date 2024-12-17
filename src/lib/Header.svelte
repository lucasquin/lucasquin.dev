<script lang="ts">
	import { locale, locales } from '$lib/i18n/store';

	export let title: string;

	const getFlag = (l: string) => {
		switch (l) {
			case 'en':
				return '🇺🇸';
			case 'pt':
				return '🇧🇷';
			default:
				return '';
		}
	};
</script>

<header class="relative py-4">
	<h1 class="text-center text-4xl font-bold">{title}</h1>
	<select bind:value={$locale} class="absolute right-0 top-1/2 -translate-y-1/2 rounded border p-2">
		{#each locales as l}
			<option value={l}>{getFlag(l)} {l}</option>
		{/each}
	</select>
</header>
