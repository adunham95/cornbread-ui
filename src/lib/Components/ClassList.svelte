<script lang="ts">
	interface IProps {
		list: { className: string; type: 'component' | 'theme' | 'modifier'; description: string }[];
	}
	const { list }: IProps = $props();
</script>

<table class="min-w-full divide-y divide-surface-3">
	<thead>
		<tr>
			<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-content sm:pl-0">
				ClassName
			</th>
			<th
				scope="col"
				class="hidden px-3 py-3.5 text-left text-sm font-semibold text-content lg:table-cell"
			>
				Type
			</th>

			<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
				<span class="sr-only">Description</span>
			</th>
		</tr>
	</thead>
	<tbody class="divide-y divide-gray-200 bg-white">
		{#each list as listItem}
			<tr>
				<td
					class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-content sm:w-auto sm:max-w-none sm:pl-0"
				>
					<span class=" bg-surface-2 p-1 font-code">
						{listItem.className}
					</span>
					<dl class="font-normal text-content-2 sm:hidden">
						<dd class="mt-1 truncate">{listItem.description}</dd>
					</dl>
					<dl class="font-normal text-content-2 lg:hidden">
						<dd class="">{listItem.type}</dd>
					</dl>
				</td>
				<td class="hidden px-3 py-4 text-sm text-content-2 lg:table-cell">{listItem.type} </td>
				<td class="hidden px-3 py-4 text-sm text-content-2 sm:table-cell">
					{listItem.description}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
