<script lang="ts">
	import type { GithubProfileItem } from './github-profile-item.type';

	type Props = {
        profile: GithubProfileItem
	};

	const { profile: result }: Props = $props();
    const { profile, error } = result;
</script>

<div>
	{#if profile}
		<div>
			<img src={profile.avatar_url} alt={profile.name} class="avatar" />
			<p>Username: {profile.login}</p>
			<p>Name: {profile.name}</p>
			<p>Bio: {profile.bio || 'N/A'}</p>
			<p>Followers: {profile.followers}</p>
			<p>Following: {profile.following}</p>
			<p>Public Repos: {profile.public_repos}</p>
			<a href="{profile.html_url}" target="_blank" rel="noopener noreferrer">View Profile </a>
		</div>
	{:else if error}
		<div>
			<p>Error: {error}</p>
		</div>
	{/if}
</div>
