<script lang="ts">
	import Codeblock from '$lib/Components/Codeblock.svelte';
	import ComponentLayout from '$lib/Components/Layouts/ComponentLayout.svelte';
</script>

<ComponentLayout title="Button" path="/components/btn">
	<button class="btn">Button</button>
	<div class="pb-2">
		<Codeblock code={`<button class="btn">Button</button>`} />
	</div>
</ComponentLayout>
