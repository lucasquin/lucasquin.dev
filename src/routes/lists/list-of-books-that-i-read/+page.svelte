<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import ListsComponent from '$lib/components/ListsComponent.svelte';
	import SectionComponent from '$lib/components/SectionComponent.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<HeadComponent head={data.head} />
<SectionComponent section={data.section} />
<ListsComponent lists={data.lists} />
