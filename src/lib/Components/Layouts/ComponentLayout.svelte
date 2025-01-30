<script lang="ts">
	import type { Snippet } from 'svelte';
	import Breadcrumbs from '../Breadcrumbs.svelte';

	interface IProps {
		title: string;
		children: Snippet;
		path: string;
	}

	const { title, children, path }: IProps = $props();
</script>

<div class="pb-2">
	<Breadcrumbs
		links={[
			{ title: 'Components', path: '/' },
			{ title, path }
		]}
	/>
</div>

<div class="pb-2 md:flex md:items-center md:justify-between">
	<div class="min-w-0 flex-1">
		<h2 class="text-2xl/7 font-bold text-content sm:truncate sm:text-3xl sm:tracking-tight">
			{title}
		</h2>
	</div>
</div>

<div class="pb-2">
	{@render children()}
</div>
