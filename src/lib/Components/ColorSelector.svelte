<script lang="ts">
	let { color = $bindable(), id, label = 'Select A color' } = $props();
</script>

<label for={id}>{label}</label>
<input
	{id}
	type="color"
	class="block h-10 w-14 cursor-pointer rounded border border-gray-200 p-1 disabled:pointer-events-none disabled:opacity-50"
	bind:value={color}
/>
