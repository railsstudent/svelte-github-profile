<script lang="ts"> 
    import GithubProfileCard from "./github-profile-card.svelte";
	import type { GithubProfileItem } from './github-profile-item.type';

    type Props = {
        profiles: GithubProfileItem[]
    };

    const { profiles }: Props = $props();

</script>

<div class="header">
    <h1>Github Profile List (Svelte ver.)</h1>
</div>
{#each profiles as profile (profile.key)}
    <GithubProfileCard {profile} />
{/each}

<style>
    div.header {
        grid-column: 1 / -1;
        text-align: center;
        margin-bottom: 20px;
    }

    h1 {
        font-size: 2rem;
        color: #333;
    }
</style>
