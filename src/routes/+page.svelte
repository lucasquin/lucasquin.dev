<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Topics from '$lib/Topics.svelte';

	const title: string = 'lucasquin.dev';

	const description: string = 'Welcome to my personal website';
	const keywords: string = 'developer, web development, portfolio';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
</svelte:head>

<Section subtitle={'Hello'} />
<Section subtitle={'The Art of Programming'} />

<Topics />
