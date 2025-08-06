<script lang="ts"> 
    import GithubProfileCard from "./github-profile-card.svelte";
	import type { GithubProfileItem } from './github-profile-item.type';

    type Props = {
        profiles: GithubProfileItem[]
    };

    const { profiles }: Props = $props();

</script>

<div class="col-span-full mb-[1.25rem] text-center">
    <h1 class="text-3xl">Github Profile List (Svelte ver.)</h1>
</div>
{#each profiles as profile (profile.key)}
    <GithubProfileCard {profile} />
{/each}

