<script lang="ts">
	import ClassList from '$lib/Components/ClassList.svelte';
	import Codeblock from '$lib/Components/Codeblock.svelte';
	import ComponentLayout from '$lib/Components/Layouts/ComponentLayout.svelte';
</script>

<ComponentLayout title="Button" path="/components/btn">
	<ClassList
		list={[
			{ className: 'btn', type: 'component', description: 'Button Component' },
			{ className: 'btn-primary', type: 'theme', description: 'Applies the primary colors' },
			{ className: 'btn-accent', type: 'theme', description: 'Applies the accent colors' },
			{ className: 'btn-success', type: 'theme', description: 'Applies the success colors' },
			{ className: 'btn-error', type: 'theme', description: 'Applies the error colors' },
			{ className: 'btn-warning', type: 'theme', description: 'Applies the warning colors' },
			{ className: 'btn-info', type: 'theme', description: 'Applies the info colors' },
			{
				className: 'btn-outline',
				type: 'modifier',
				description: 'Makes it a button with an outline and transparent background'
			},
			{
				className: 'btn-text',
				type: 'modifier',
				description: 'Makes it a button that is just text'
			}
		]}
	/>

	<div class=" pb-4">
		<h2>Default Button</h2>
		<section class="tab-container pt-2">
			<label for="d-but-p">Preview</label>
			<input type="radio" id="d-but-p" name="d-but" class="tab" role="tab" checked />
			<div role="tabpanel" class="tab-content rounded-md border border-content-1 p-1">
				<div class=" space-y-1">
					<button class="btn">Button</button>
					<button class="btn btn-primary">Button Primary</button>
					<button class="btn btn-accent">Button Accent</button>
					<button class="btn btn-success">Button Success</button>
					<button class="btn btn-error">Button Error</button>
					<button class="btn btn-warning">Button Warning</button>
					<button class="btn btn-info">Button Info</button>
				</div>
			</div>

			<label for="d-but-c">Code</label>
			<input type="radio" id="d-but-c" name="d-but" class="tab" role="tab" aria-label="Tab 2" />
			<div role="tabpanel" class="tab-content rounded-md border border-content-1 p-1">
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
	</div>

	<div class="pb-4">
		<h2>Outline Button</h2>
		<section class="tab-container pt-2">
			<label for="o-but-p">Preview</label>
			<input type="radio" id="o-but-p" name="o-but" class="tab" role="tab" checked />
			<div role="tabpanel" class="tab-content rounded-md border border-content-1 p-1">
				<div class=" space-y-1">
					<button class="btn btn-outline">Outline Button</button>
					<button class="btn btn-primary btn-outline">Outline Button Primary</button>
					<button class="btn btn-accent btn-outline">Outline Button Accent</button>
					<button class="btn btn-success btn-outline">Outline Button Success</button>
					<button class="btn btn-error btn-outline">Outline Button Error</button>
					<button class="btn btn-warning btn-outline">Outline Button Warning</button>
					<button class="btn btn-info btn-outline">Outline Button Info</button>
				</div>
			</div>
			<label for="o-but-c">Code</label>
			<input type="radio" id="o-but-c" name="o-but" class="tab" role="tab" checked />
			<div role="tabpanel" class="tab-content rounded-md border border-content-1 p-1">
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
	</div>

	<div class="pb-4">
		<h2>Text Button</h2>
		<section class="tab-container pt-2">
			<label for="t-but-p">Preview</label>
			<input type="radio" id="t-but-p" name="t-but" class="tab" role="tab" checked />
			<div role="tabpanel" class="tab-content rounded-md border border-content-1 p-1">
				<div class=" space-y-1">
					<button class="btn btn-text">Text Button</button>
					<button class="btn btn-primary btn-text">Text Button Primary</button>
					<button class="btn btn-accent btn-text">Text Button Accent</button>
					<button class="btn btn-success btn-text">Text Button Success</button>
					<button class="btn btn-error btn-text">Text Button Error</button>
					<button class="btn btn-warning btn-text">Text Button Warning</button>
					<button class="btn btn-info btn-text">Text Button Info</button>
				</div>
			</div>

			<label for="t-but-c">Code</label>
			<input type="radio" id="t-but-c" name="t-but" class="tab" role="tab" checked />
			<div role="tabpanel" class="tab-content rounded-md border border-content-1 p-1">
				<Codeblock
					code={`
<button class="btn btn-text">Text Button</button>
<button class="btn btn-primary btn-text">Text Button Primary</button>
<button class="btn btn-accent btn-text">Text Button Accent</button>
<button class="btn btn-success btn-text">Text Button Success</button>
<button class="btn btn-error btn-text">Text Button Error</button>
<button class="btn btn-warning btn-text">Text Button Warning</button>
<button class="btn btn-info btn-text">Text Button Info</button>`}
				/>
			</div>
		</section>
	</div>
</ComponentLayout>
