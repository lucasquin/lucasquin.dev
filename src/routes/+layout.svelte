<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	let { children } = $props();
	let title: string = 'lucasquin.dev';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Personal website of lucasquin" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header {title} />

	<main class="flex-grow">
		{@render children()}
	</main>

	<Footer />
</div>
