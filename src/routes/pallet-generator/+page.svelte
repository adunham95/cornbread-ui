<script lang="ts">
	import ColorSelector from '$lib/Components/ColorSelector.svelte';
	import { hexToRgb, generatePallet } from '$lib/utilities/colorUtils.ts';
	let brand = $state('');
	let brandDetails = $derived(generatePallet(brand));
</script>

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
<div class="flex">
	<div style={`background-color: ${brandDetails[50]}`} class="h-10 w-10"></div>
	<p class="ml-2">50 {brandDetails[50]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[100]}`} class="h-10 w-10"></div>
	<p class="ml-2">100 {brandDetails[100]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[200]}`} class="h-10 w-10"></div>
	<p class="ml-2">200 {brandDetails[200]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[300]}`} class="h-10 w-10"></div>
	<p class="ml-2">300 {brandDetails[300]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[400]}`} class="h-10 w-10"></div>
	<p class="ml-2">400 {brandDetails[400]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[500]}`} class="h-10 w-10"></div>
	<p class="ml-2">500 {brandDetails[500]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[600]}`} class="h-10 w-10"></div>
	<p class="ml-2">600 {brandDetails[600]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[700]}`} class="h-10 w-10"></div>
	<p class="ml-2">700 {brandDetails[700]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[800]}`} class="h-10 w-10"></div>
	<p class="ml-2">800 {brandDetails[800]}</p>
</div>
<div class="flex">
	<div style={`background-color: ${brandDetails[900]}`} class="h-10 w-10"></div>
	<p class="ml-2">900 {brandDetails[900]}</p>
</div>
