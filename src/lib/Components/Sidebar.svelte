<script lang="ts">
	import { base } from '$app/paths';
	let expanded = $state('');
	import { page } from '$app/state';

	interface SidebarProps {
		links: { name: string; href?: string; id?: string; links?: { name: string; href: string }[] }[];
		onclick?: () => void;
	}

	const { links, onclick = () => null }: SidebarProps = $props();

	function toggleExpanded(name: string) {
		if (expanded === name) {
			expanded = '';
		} else {
			expanded = name;
		}
	}
</script>

<ul role="list" class="-mx-2 space-y-1">
	{#each links as link}
		{#if link.href}
			<li>
				<a
					{onclick}
					href={`${base}${link.href}`}
					class={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold hover:bg-surface-1 ${page.url.pathname === link.href ? 'bg-surface-1 hover:bg-surface-2' : ''} `}
				>
					{link.name}
				</a>
			</li>
		{/if}
		{#if link.id}
			<li>
				<div>
					<button
						type="button"
						class="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold hover:bg-surface-1"
						aria-controls="sub-menu-1"
						aria-expanded="false"
						onclick={() => toggleExpanded(link.id || '')}
					>
						<!-- Expanded: "rotate-90 text-gray-500", Collapsed: "text-gray-400" -->
						<svg
							class={`size-5 shrink-0 ${link.id === expanded ? 'rotate-90 text-content' : 'text-content-1'}`}
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
								clip-rule="evenodd"
							></path>
						</svg>
						{link.name}
					</button>
					<!-- Expandable link section, show/hide based on state. -->
					<ul
						class={`mt-1 px-2 ${link.id === expanded ? 'block' : 'hidden'}`}
						id="sub-menu-1 space-y-1"
					>
						{#if link.links}
							{#each link.links as sublink}
								<li>
									<a
										{onclick}
										href={`${base}${sublink.href}`}
										class={`${page.url.pathname === sublink.href ? 'bg-surface-1 hover:bg-surface-2' : ''} block rounded-md py-2 pl-9 pr-2 text-sm/6 hover:bg-surface-1 `}
									>
										{sublink.name}
									</a>
								</li>
							{/each}
						{/if}
					</ul>
				</div>
			</li>
		{/if}
	{/each}
</ul>
