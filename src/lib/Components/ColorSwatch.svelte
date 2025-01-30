<script lang="ts">
	interface IProps {
		color: string;
		title: string;
	}
	const { color, title }: IProps = $props();
</script>

<div class="flex items-center">
	<div class={`mr-1 h-8 w-8 rounded-md border border-surface-3 ${color}`}></div>
	<p>{title}</p>
</div>
