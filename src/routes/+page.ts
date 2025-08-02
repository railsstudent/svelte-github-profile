import type { PageLoad } from './$types';
import { fetchGithubProfile } from '$lib/github-profile.data';
import type { GithubProfile } from '$lib/github-profile.type';

export const load: PageLoad = async () => {
	const usernames = ['antfu', 'railsstudent', 'danielkellyio', 'hootlex', 'MooseSaeed'];
	const profilesSettled = await Promise.allSettled(
        usernames.map((username) => fetchGithubProfile(username))
    );

    const profiles = profilesSettled.reduce((acc, result, idx) => {
        if (result.status === 'fulfilled') {
            return acc.concat({
                key: idx,
                profile: result.value,
                error: undefined
            });
        } else {
            return acc.concat({
                key: idx,
                profile: undefined,
                error: `Error fetching profile: ${result.reason}`
            });

        }
    }, [] as { key: number; profile?: GithubProfile; error?: string }[])
    
	return {
		data: profiles
	};
};
// This load function returns an array of GitHub usernames.
