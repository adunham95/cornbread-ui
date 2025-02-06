<script lang="ts">
	const data = [
		{
			colorClass: 'bg-brand',
			name: 'brand',
			description: 'Default brand color'
		},
		{
			colorClass: 'bg-brand-light',
			name: 'brand-light',
			description: 'Light brand color'
		},
		{
			colorClass: 'bg-brand-dark',
			name: 'brand-dark',
			description: 'Brand brand color'
		},
		{
			colorClass: 'bg-brand-content',
			name: 'brand-content',
			description: 'Text for brand'
		},
		{
			colorClass: 'bg-accent',
			name: 'accent',
			description: 'Default accent color'
		},
		{
			colorClass: 'bg-accent-light',
			name: 'accent-light',
			description: 'Light accent color'
		},
		{
			colorClass: 'bg-accent-dark',
			name: 'accent-dark',
			description: 'Accent brand color'
		},
		{
			colorClass: 'bg-accent-content',
			name: 'accent-content',
			description: 'Text for accent'
		},

		{
			colorClass: 'bg-success',
			name: 'success',
			description: 'Success text'
		},
		{
			colorClass: 'bg-success-light',
			name: 'success-light',
			description: 'Success alert light'
		},
		{
			colorClass: 'bg-success-dark',
			name: 'success-dark',
			description: 'Success alert dark'
		},
		{
			colorClass: 'bg-error',
			name: 'error',
			description: 'Error text'
		},
		{
			colorClass: 'bg-error-light',
			name: 'error-light',
			description: 'Error alert background'
		},
		{
			colorClass: 'bg-error-dark',
			name: 'error-dark',
			description: 'Error alert background'
		},
		{
			colorClass: 'bg-warning',
			name: 'warning',
			description: 'Warning text'
		},
		{
			colorClass: 'bg-warning-light',
			name: 'warning-light',
			description: 'Warning alert background'
		},
		{
			colorClass: 'bg-warning-dark',
			name: 'warning-dark',
			description: 'Warning alert background'
		},
		{
			colorClass: 'bg-info',
			name: 'info',
			description: 'Info text'
		},
		{
			colorClass: 'bg-info-light',
			name: 'info-light',
			description: 'Info alert background'
		},
		{
			colorClass: 'bg-info-dark',
			name: 'info-dark',
			description: 'Info alert background'
		},
		{
			colorClass: 'bg-surface-background',
			name: 'surface-background',
			description: 'Surface Background element. Used for the page background'
		},
		{
			colorClass: 'bg-surface',
			name: 'surface',
			description: 'Surface Elements such as cards, sidebars etc'
		},
		{
			colorClass: 'bg-surface-1',
			name: 'surface-1',
			description: 'Surface Elements such as cards, sidebars etc'
		},
		{
			colorClass: 'bg-surface-2',
			name: 'surface-2',
			description: 'Surface Elements such as cards, sidebars etc'
		},
		{
			colorClass: 'bg-surface-3',
			name: 'surface-3',
			description: 'Surface Elements such as cards, sidebars etc'
		},
		{
			colorClass: 'bg-content',
			name: 'content',
			description: 'Default text'
		},
		{
			colorClass: 'bg-content-1',
			name: 'content-1',
			description: 'Content for text such as cards, sidebars etc'
		},
		{
			colorClass: 'bg-content-2',
			name: 'content-2',
			description: 'Content for text such as cards, sidebars etc'
		},
		{
			colorClass: 'bg-content-3',
			name: 'content-3',
			description: 'Content for text such as cards, sidebars etc'
		}
	];
</script>

<h1>Colors</h1>

<table class="min-w-full divide-y divide-gray-300">
	<thead>
		<tr>
			<th
				scope="col"
				class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
			>
				Color
			</th>
			<th
				scope="col"
				class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
			>
				Description
			</th>
			<th
				scope="col"
				class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
				>Example</th
			>
		</tr>
	</thead>
	<tbody class="divide-y divide-gray-200">
		{#each data as color}
			{@render row(color)}
		{/each}
	</tbody>
</table>

{#snippet row({
	colorClass,
	name,
	description
}: {
	colorClass: string;
	name: string;
	description: string;
})}
	<tr data-color={colorClass}>
		<td
			class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-content sm:w-auto sm:max-w-none sm:pl-0"
		>
			<div class="flex items-center">
				<div class="size-11 shrink-0">
					<div class={`size-11 rounded-full border border-gray-200 ${colorClass}`}></div>
				</div>
				<div class="ml-4">
					<div class="font-medium text-gray-900">{name}</div>
				</div>
			</div>
			<dl class="font-normal text-content-2 lg:hidden">
				<dd class="mt-1 flex items-center truncate">
					<span class="pr-2">Example:</span>
					<span
						class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 font-code text-xs text-gray-700 ring-1 ring-inset ring-gray-600/20"
					>
						{colorClass}
					</span>
				</dd>
			</dl>
			<dl class="font-normal text-content-2 md:hidden">
				<dd class="">{description}</dd>
			</dl>
		</td>
		<td class="hidden whitespace-nowrap px-3 py-5 text-sm text-gray-500 md:table-cell">
			<div class="text-gray-900">{description}</div>
		</td>
		<td class="hidden whitespace-nowrap px-3 py-5 text-sm text-gray-500 lg:table-cell">
			<span
				class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 font-code text-xs text-gray-700 ring-1 ring-inset ring-gray-600/20"
			>
				{colorClass}
			</span>
		</td>
	</tr>
{/snippet}
