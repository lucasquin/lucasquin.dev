<script lang="ts">
	import Cards from '$lib/Cards.svelte';
	import Section from '$lib/Section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.head.title}</title>
	<meta name="description" content={data.head.description} />
	<meta name="keywords" content={data.head.keywords} />
</svelte:head>

<Section subtitle={'welcome.hello'} text={'welcome.description'} />
<Section subtitle={'articles.programming.title'} text={'articles.programming.description'} />

<Cards cards={data.cards} />
