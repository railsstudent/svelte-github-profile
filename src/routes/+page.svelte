<script lang="ts">
	import type { PageProps } from './$types';
	import GithubProfileCard from '$lib/github-profile-card.svelte';

	let { data: results }: PageProps = $props();

	const { data: profiles } = results;
</script>

<p>Here are some Github profiles:</p>
{#if !profiles || profiles.length === 0}
	<p>No profiles found.</p>
{:else}
	{#each profiles as profile (profile.key)}
		<GithubProfileCard {profile} />
	{/each}
{/if}
