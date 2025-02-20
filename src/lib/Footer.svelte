<script lang="ts">
	import { t } from '$lib/i18n/store';

	const currentYear: number = new Date().getFullYear();
</script>

<footer class="mt-auto py-4">
	<div class="container mx-auto flex items-center justify-between px-4">
		<p><small>{currentYear}</small></p>
		<nav aria-label="Footer navigation">
			<ul class="flex gap-4">
				<li>
					<a href="/" class="hover:text-blue-600 hover:underline" aria-label="Go to home">/{$t('common.home')}</a>
				</li>
				<li>
					<a href="/now" class="hover:text-blue-600 hover:underline" aria-label="Go to now section">/{$t('common.now')}</a>
				</li>
				<li>
					<a href="/lists" class="hover:text-blue-600 hover:underline" aria-label="Go to lists section">/{$t('common.lists')}</a>
				</li>
				<li>
					<a
						href="https://x.com/lucaslquin"
						class="hover:text-blue-600 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit Twitter profile">/twitter</a
					>
				</li>
				<li>
					<a
						href="https://github.com/lucasquin"
						class=" hover:text-blue-600 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit GitHub profile">/github</a
					>
				</li>
			</ul>
		</nav>
	</div>
</footer>
