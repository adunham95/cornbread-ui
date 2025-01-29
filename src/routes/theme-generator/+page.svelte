<script>
	// @ts-nocheck

	import ColorSelector from '$lib/Components/ColorSelector.svelte';
	// @ts-ignore
	import { hexToRgb, generatePallet } from '$lib/utilities/colorUtils.ts';

	let brand = $state('');
	let brandDetails = $derived(generatePallet(brand));

	let accent = $state('');
	let accentDetails = $derived(generatePallet(accent));

	$inspect(brandDetails);
</script>

<div>
	<div>
		<h2>Brand</h2>

		<ColorSelector label="Select Brand Color" id="brand" bind:color={brand} />
		<input bind:value={brand} placeholder="Brand Color" />
		<div class="flex">
			<div style={`background-color: ${brandDetails.light}`} class="h-10 w-10"></div>
			<p class="ml-2">Light {brandDetails.light}</p>
		</div>
		<div class="flex">
			<div style={`background-color: ${brandDetails.DEFAULT}`} class="h-10 w-10"></div>
			<p class="ml-2">Brand</p>
		</div>
		<div class="flex">
			<div style={`background-color: ${brandDetails.dark}`} class="h-10 w-10"></div>
			<p class="ml-2">Dark {brandDetails.dark}</p>
		</div>
		<div class="flex">
			<div style={`background-color: ${brandDetails.content}`} class="h-10 w-10"></div>
			<p class="ml-2">Content</p>
		</div>
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<button
			onmouseover={(this.style.backgroundColor = brandDetails.dark)}
			onmouseout={(this.style.backgroundColor = brandDetails.DEFAULT)}
			style={`background-color: ${brandDetails.DEFAULT}; color: ${brandDetails.content}`}
			class="btn">Button Example</button
		>
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<button
			onmouseover={(this.style.backgroundColor = brandDetails.light)}
			onmouseout={(this.style.backgroundColor = 'transparent')}
			style={`border-color: ${brandDetails.DEFAULT}; color: ${brandDetails.DEFAULT}`}
			class="btn-text btn">Button Example</button
		>
	</div>

	<div>
		<h2>Accent</h2>

		<ColorSelector label="Select Accent Color" id="accent" bind:color={accent} />
		<input bind:value={accent} placeholder="Accent Color" />
		<div class="flex">
			<div style={`background-color: ${accentDetails.light}`} class="h-10 w-10"></div>
			<p class="ml-2">Light</p>
		</div>
		<div class="flex">
			<div style={`background-color: ${accentDetails.DEFAULT}`} class="h-10 w-10"></div>
			<p class="ml-2">Brand</p>
		</div>
		<div class="flex">
			<div style={`background-color: ${accentDetails.dark}`} class="h-10 w-10"></div>
			<p class="ml-2">Dark</p>
		</div>
		<div class="flex">
			<div style={`background-color: ${accentDetails.content}`} class="h-10 w-10"></div>
			<p class="ml-2">Content</p>
		</div>
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<button
			onmouseover={(this.style.backgroundColor = accentDetails.dark)}
			onmouseout={(this.style.backgroundColor = accentDetails.DEFAULT)}
			style={`background-color: ${accentDetails.DEFAULT}; color: ${accentDetails.content}`}
			class="btn">Button Example</button
		>
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<button
			onmouseover={(this.style.backgroundColor = accentDetails.light)}
			onmouseout={(this.style.backgroundColor = 'transparent')}
			style={`border-color: ${accentDetails.DEFAULT}; color: ${accentDetails.DEFAULT}`}
			class="btn-text btn">Button Example</button
		>
	</div>
</div>
