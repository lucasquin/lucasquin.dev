<script lang="ts">
	import { t } from '$lib/i18n/store';
	import type { IList } from '$lib/types';

	export let lists: IList[];
</script>

<ul class="list-disc space-y-2">
	{#each lists as list}
		<li>
			<a
				href={list.href}
				class="block text-gray-700 duration-200 hover:bg-gray-100 hover:text-blue-600"
				aria-label={$t(list.title, list.translate)}
				target={list.target ?? '_self'}
			>
				{$t(list.title, list.translate)}
			</a>
		</li>
	{/each}
</ul>
