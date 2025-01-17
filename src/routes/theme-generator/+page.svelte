<script>
	import ColorSelector from '$lib/Components/ColorSelector.svelte';
	// @ts-ignore
	import { hexToRgb } from '$lib/utilities/hexToRBG.ts';

	let surface = $state('');
	let surfaceBackground = $state('');

	let surfaceRGB = $derived(hexToRgb(surface));
	let surfaceBackgroundRGB = $derived(hexToRgb(surfaceBackground));
</script>

<div
	style="--surface: {surfaceRGB.r} {surfaceRGB.g} {surfaceRGB.b};--surface-background: {surfaceBackgroundRGB.r} {surfaceBackgroundRGB.g} {surfaceBackgroundRGB.b}"
>
	<div>
		<ColorSelector id="surface" bind:color={surface} />
		<div class="bg-custom-surface h-5 w-5"></div>
	</div>
	<div>
		<ColorSelector id="surfaaceBackground" bind:color={surfaceBackground} />
		<div class="bg-custom-surfaceBackground h-5 w-5"></div>
	</div>
</div>
