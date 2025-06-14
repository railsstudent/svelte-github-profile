<script lang="ts">
	import type { PageProps } from './$types';
	import GithubProfileCard from '$lib/github-profile-card.svelte';

	let { data }: PageProps = $props();

	const profiles = data.profiles;
</script>

<p>Here are some Github profiles:</p>
{#each profiles as profile (profile.idx)}
	<GithubProfileCard {profile} />
{/each}
