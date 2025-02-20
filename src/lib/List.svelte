<script lang="ts">
	import { t } from '$lib/i18n/store';
	import type { ListType } from '../app';

	export let list: ListType[];

	function createUrl(title: string): string {
		return title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}
</script>

<ul class="list-disc space-y-2">
	{#each list as item}
		<li>
			<a
				href={'lists/' + createUrl($t(item.title))}
				class="block text-gray-700 duration-200 hover:bg-gray-100 hover:text-blue-600"
				aria-label={$t(item.title)}
			>
				{$t(item.title)}
			</a>
		</li>
	{/each}
</ul>
