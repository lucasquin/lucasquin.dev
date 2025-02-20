<script lang="ts">
	import List from '$lib/List.svelte';
	import Section from '$lib/Section.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.head.title}</title>
	<meta name="description" content={data.head.description} />
	<meta name="keywords" content={data.head.keywords} />
</svelte:head>

<Section subtitle={'common.Lists'} />

<List list={data.list} />
