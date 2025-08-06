<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div id="app" class="grid grid-cols-2 pt-0 pb-0 pl-[2rem] pr-[2rem]">
	{@render children()}
</div>
