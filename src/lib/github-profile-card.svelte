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
		<div class="card card-side bg-base-100 shadow-sm">
			<figure class="basis-[30%] grow shrink">
			  <img src={profile.avatar_url} alt={profile.name} />
			</figure>
			<div class="card-body basis-[70%] grow shrink">
			  <h2 class="card-title">{ profile.login }</h2>
			  <p>Name: { profile.name }</p>
			  <p>Bio: { profile.bio || 'N/A' }</p>
			  <p>Followers: { profile.followers }</p>
			  <p>Following: { profile.following }</p>
			  <p>Public Repos: { profile.public_repos }</p>
			  <div class="card-actions justify-end">
				<button class="btn btn-primary">
				  <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
					<span class="text-white">View Profile</span>
				  </a>
				</button>
			  </div>
			</div>
		  </div>
	{:else if error}
		<div>
			<p>Error: {error}</p>
		</div>
	{/if}
</div>
