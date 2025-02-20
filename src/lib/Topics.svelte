<script lang="ts">
	import { t } from '$lib/i18n/store';

	interface Topic {
		title: string;
		description: string | null;
		href: string;
	}

	export let topics: Topic[];

	const createId = (title: string): string => `topic-${title.toLowerCase().replace(/\s+/g, '-')}-${Math.random()}`;
</script>

<ul class="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
	{#each topics as topic (createId(topic.title))}
		<li
			class="group h-full rounded-lg border border-gray-200 transition-colors hover:border-gray-300 hover:shadow-md"
		>
			<a
				href={topic.href}
				class="block h-full p-4 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
			>
				<h3
					id={createId(topic.title)}
					class="text-left text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 {topic.description
						? 'mb-6'
						: ''}"
				>
					{$t(topic.title)}
				</h3>

				{#if topic.description}
					<p class="text-sm text-gray-600">
						{$t(topic.description)}
					</p>

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
				{/if}
			</a>
		</li>
	{/each}
</ul>
