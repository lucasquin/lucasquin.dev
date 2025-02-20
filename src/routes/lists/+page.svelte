<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Topics from '$lib/Topics.svelte';

	const tabTitle: string = 'Lists';

	const description: string = 'Welcome to my personal website';
	const keywords: string = 'developer, web development, portfolio';

	const topics = [
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		},
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		},
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		},
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		},
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		},
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		},
		{
			title: 'lists.youtubeChannels.title',
			href: '/lists/list-of-awesome-youtube-channels',
			description: null
		}
	];
</script>

<svelte:head>
	<title>{tabTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
</svelte:head>

<Section subtitle={'common.Lists'} />

<Topics {topics} />
