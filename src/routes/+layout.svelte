<script lang="ts">
	import '../app.css';
	import FooterComponent from '$lib/components/FooterComponent.svelte';
	import HeaderComponent from '$lib/components/HeaderComponent.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let children: () => any;
</script>

<div class="flex min-h-screen flex-col">
	<HeaderComponent header={data.header} />

	<main class="flex-grow">
		{@render children()}
	</main>

	<FooterComponent />
</div>
