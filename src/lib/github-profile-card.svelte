<script lang="ts">
	import type { GithubProfileItem } from './github-profile-item.type';

	type Props = {
        profile: GithubProfileItem
	};

	const { profile }: Props = $props();
    const { profile: user, error } = profile;
</script>

<div>
	{#if user}
		<div>
			<img src={user.avatar_url} alt={user.name} class="avatar" />
			<p>Username: {user.login}</p>
			<p>Name: {user.name}</p>
			<p>Bio: {user.bio || 'N/A'}</p>
			<p>Followers: {user.followers}</p>
			<p>Following: {user.following}</p>
			<p>Public Repos: {user.public_repos}</p>
			<a href="{user.html_url}" target="_blank" rel="noopener noreferrer">View Profile </a>
		</div>
	{:else if error}
		<div>
			<p>Error: {error}</p>
		</div>
	{/if}
</div>
