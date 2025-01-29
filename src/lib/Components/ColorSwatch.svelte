<script lang="ts">
	interface IProps {
		color: string;
		title: string;
	}
	const { color, title }: IProps = $props();
</script>

<div class="flex items-center">
	<div class={`mr-1 h-8 w-8 rounded-sm border border-gray-800 ${color}`}></div>
	<p>{title}</p>
</div>
