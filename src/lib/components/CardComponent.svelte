<script lang="ts">
	import { t } from '$lib/i18n/store';
	import type { ICard } from '$lib/types';

	export let card: ICard;
</script>

<li class="group h-full list-none rounded-lg border border-gray-200 transition-colors hover:border-gray-300 hover:shadow-md">
	<a href={card.href} class="block h-full p-4 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
		<h3 id={card.title} class="mb-6 text-left text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
			{$t(card.title)}
		</h3>
		<p class="text-sm text-gray-600">
			{$t(card.description)}
		</p>
		{#if card.tags && card.tags.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each card.tags as tag}
					<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
						{$t(tag)}
					</span>
				{/each}
			</div>
		{/if}
		<div
			class="mt-4 flex translate-y-1 transform items-center text-sm font-medium text-blue-600 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
		>
			{$t('common.learnMore')}
			<svg
				class="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M5 12h14m-7-7l7 7-7 7" />
			</svg>
		</div>
	</a>
</li>
