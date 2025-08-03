<script lang="ts">
	import type { PageProps } from './$types';
	import GithubProfileList from '$lib/github-profile-list.svelte';

	const { data: results }: PageProps = $props();

	const { data: profiles } = results;
</script>

{#if !profiles || profiles.length === 0}
	<p>No profiles found.</p>
{:else}
	<GithubProfileList {profiles} />
{/if}
