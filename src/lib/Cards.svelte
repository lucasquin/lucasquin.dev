<script lang="ts">
	import type { CardType } from '../app';
	import Card from './Card.svelte';

	export let cards: CardType[];
</script>

<ul class="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
	{#each cards as card}
		<Card {card} />
	{/each}
</ul>
