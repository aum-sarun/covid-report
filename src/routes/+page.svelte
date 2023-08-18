<script>
	export let data;
</script>

{#if data}
	Data: {JSON.stringify(data)}
{:else}
	<h1 class="text-3xl font-bold underline">Hello world!</h1>
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
