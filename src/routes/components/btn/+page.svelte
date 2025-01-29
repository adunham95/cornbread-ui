<script lang="ts">
	import Codeblock from '$lib/Components/Codeblock.svelte';
	import ComponentLayout from '$lib/Components/Layouts/ComponentLayout.svelte';
</script>

<ComponentLayout title="Button" path="/components/btn">
	<section>
		<h2>Base Button</h2>
		<button class="btn">Button</button>
		<button class="btn-primary btn">Button Primary</button>
		<button class="btn-accent btn">Button Accent</button>
		<button class="btn-success btn">Button Success</button>
		<button class="btn-error btn">Button Error</button>
		<button class="btn-warning btn">Button Warning</button>
		<button class="btn-info btn">Button Info</button>

		<div class="pb-2">
			<Codeblock
				code={`
<button class="btn">Button</button>
<button class="btn-primary btn">Button Primary</button>
<button class="btn-accent btn">Button Accent</button>
<button class="btn-success btn">Button Success</button>
<button class="btn-error btn">Button Error</button>
<button class="btn-warning btn">Button Warning</button>
<button class="btn-info btn">Button Info</button>`}
			/>
		</div>
	</section>
	<section>
		<h2>Outline Button</h2>
		<div class=" space-y-1">
			<button class="btn-outline btn">Outline Button</button>
			<button class="btn-outline btn-primary btn">Outline Button Primary</button>
			<button class="btn-outline btn-accent btn">Outline Button Accent</button>
			<button class="btn-outline btn-success btn">Outline Button Success</button>
			<button class="btn-outline btn-error btn">Outline Button Error</button>
			<button class="btn-outline btn-warning btn">Outline Button Warning</button>
			<button class="btn-outline btn-info btn">Outline Button Info</button>
		</div>
		<div>
			<Codeblock
				code={`
<button class="btn-outline btn">Outline Button</button>
<button class="btn-outline btn-primary btn">Outline Button Primary</button>
<button class="btn-outline btn-accent btn">Outline Button Accent</button>
<button class="btn-outline btn-success btn">Outline Button Success</button>
<button class="btn-outline btn-error btn">Outline Button Error</button>
<button class="btn-outline btn-warning btn">Outline Button Warning</button>
<button class="btn-outline btn-info btn">Outline Button Info</button>`}
			/>
		</div>
	</section>
	<section>
		<h2>Text Button</h2>
		<div class=" space-y-1">
			<button class="btn-text btn">Text Button</button>
			<button class="btn-text btn-primary btn">Text Button Primary</button>
			<button class="btn-text btn-accent btn">Text Button Accent</button>
			<button class="btn-text btn-success btn">Text Button Success</button>
			<button class="btn-text btn-error btn">Text Button Error</button>
			<button class="btn-text btn-warning btn">Text Button Warning</button>
			<button class="btn-text btn-info btn">Text Button Info</button>
		</div>
		<div>
			<Codeblock
				code={`
<button class="btn-outline btn">Outline Button</button>
<button class="btn-outline btn-primary btn">Outline Button Primary</button>
<button class="btn-outline btn-accent btn">Outline Button Accent</button>
<button class="btn-outline btn-success btn">Outline Button Success</button>
<button class="btn-outline btn-error btn">Outline Button Error</button>
<button class="btn-outline btn-warning btn">Outline Button Warning</button>
<button class="btn-outline btn-info btn">Outline Button Info</button>`}
			/>
		</div>
	</section>
</ComponentLayout>
