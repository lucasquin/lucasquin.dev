<script lang="ts">
	import { t } from '$lib/i18n/store';
	import type { IHead } from '$lib/types';

	export let head: IHead;
</script>

<svelte:head>
	<title>{$t(head.title)}</title>
	<meta name="description" content={head.description} />
	<meta name="keywords" content={head.keywords} />
</svelte:head>
