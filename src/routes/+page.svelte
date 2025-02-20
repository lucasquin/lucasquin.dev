<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Topics from '$lib/Topics.svelte';

	const title: string = 'lucasquin.dev';

	const description: string = 'Welcome to my personal website';
	const keywords: string = 'developer, web development, portfolio';

	const topics = [
		{
			title: 'articles.loadBalancers.title',
			description: 'articles.loadBalancers.description',
			href: '/load-balancers'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
</svelte:head>

<Section subtitle={'welcome.hello'} text={'welcome.description'} />
<Section subtitle={'articles.programming.title'} text={'articles.programming.description'} />

<Topics {topics} />
