<script lang="ts">
	import CardsComponent from '$lib/components/CardsComponent.svelte';
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import SectionComponent from '$lib/components/SectionComponent.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<HeadComponent head={data.head} />

{#each data.sections as section}
	<SectionComponent {section} />
{/each}

<CardsComponent cards={data.cards} />
