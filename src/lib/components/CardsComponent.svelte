<script lang="ts">
	import type { ICard } from '$lib/types';
	import CardComponent from './CardComponent.svelte';

	export let cards: ICard[];
</script>

<ul class="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
	{#each cards as card}
		<CardComponent {card} />
	{/each}
</ul>
