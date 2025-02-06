<script>
	import ClassList from '$lib/Components/ClassList.svelte';
	import Codeblock from '$lib/Components/Codeblock.svelte';
	import ComponentLayout from '$lib/Components/Layouts/ComponentLayout.svelte';
</script>

<ComponentLayout title="Tabs" path="/components/tabs">
	<ClassList
		list={[
			{
				className: 'tab-container',
				type: 'component',
				description: 'Wrapper component for the tabs'
			},
			{
				className: 'tab',
				type: 'component',
				description: 'Tab element its self'
			},
			{
				className: 'tab-content',
				type: 'component',
				description: 'The content block the tab will show'
			}
		]}
	/>

	<Codeblock
		code={`
<section class="tab-container pt-2">
    <label for="tab-1">Tab 1</label>
    <input
        type="radio"
        id="tab-1"
        name="tabs-1"
        class="tab"
        role="tab"
        aria-label="Tab 1"
        checked
    />
	<div role="tabpanel" class="tab-content">Tab content 1</div>

	<label for="tab-2">Tab 2</label>
	<input type="radio" id="tab-2" name="tabs-1" class="tab" role="tab" aria-label="Tab 2" />
	<div role="tabpanel" class="tab-content">Tab content 2</div>
</section>`}
	/>
</ComponentLayout>
