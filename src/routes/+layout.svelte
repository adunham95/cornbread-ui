<script lang="ts">
	import Sidebar from '$lib/Components/Sidebar.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import { version } from '$app/environment';
	import '../app.css';
	let { children } = $props();
	const links = [
		{ name: 'Install', href: '/install' },
		// { name: 'Usage', href: '/use' },
		{
			name: 'Components',
			id: 'components',
			links: [
				{ name: 'Button', href: '/components/btn' },
				{ name: 'Tabs', href: '/components/tabs' }
			]
		},
		{
			name: 'Colors',
			href: '/colors'
		},
		{
			name: 'Theme Generator',
			href: '/theme-generator'
		},
		{ name: 'RoadMap', href: '/roadmap' }
	];

	let mobileNavOpen = $state(false);

	function toggleNav() {
		mobileNavOpen = !mobileNavOpen;
	}
</script>

<div>
	<div
		class={`relative z-50 lg:hidden ${mobileNavOpen ? 'block' : 'hidden'}`}
		role="dialog"
		aria-modal="true"
	>
		<div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>

		<div class="fixed inset-0 flex">
			<div
				class={`relative mr-16 flex w-full max-w-xs flex-1 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
					<button type="button" class="-m-2.5 p-2.5" onclick={toggleNav}>
						<span class="sr-only">Close sidebar</span>
						<svg
							class="size-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-surface px-6 pb-2">
					<div class="flex h-16 shrink-0 items-center">
						<div>
							<div class="flex items-center">
								<img class="h-10 w-10" src="/logo.svg" alt="Cornbread Logo" />
								<p>Cornbread UI</p>
							</div>
							<p class="pt-1 text-xs">Version {version}</p>
						</div>
					</div>
					<nav class="flex flex-1 flex-col">
						<Sidebar {links} onclick={toggleNav} />
					</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div
			class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-surface-2 bg-surface px-6"
		>
			<div class="flex h-16 shrink-0 items-center">
				<div>
					<div class="flex items-center">
						<img class="h-10 w-10" src="/logo.svg" alt="Cornbread Logo" />
						<p>Cornbread UI</p>
					</div>
					<p class="pt-1 text-xs">Version {version}</p>
				</div>
			</div>
			<nav class="flex flex-1 flex-col">
				<Sidebar {links} />
			</nav>
		</div>
	</div>

	<div
		class="sticky top-0 z-40 flex items-center gap-x-6 bg-surface px-4 py-4 shadow-sm shadow-surface-3 sm:px-6 lg:hidden"
	>
		<button type="button" class="-m-2.5 cursor-pointer p-2.5 lg:hidden" onclick={toggleNav}>
			<span class="sr-only">Open sidebar</span>
			<svg
				class="size-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
				data-slot="icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				></path>
			</svg>
		</button>
		<div class="flex-1 text-sm/6 font-semibold">Cornbread UI</div>
	</div>

	<main class="lg:pl-72">
		<div class="min-h-[calc(100vh-136px)] px-4 py-10 sm:px-6 lg:px-8">
			<!-- Your content -->
			{@render children()}
		</div>
		<Footer />
	</main>
</div>
