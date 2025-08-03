import type { PageLoad } from './$types';
import { fetchGithubProfile } from '$lib/github-profile.data';
import type { GithubProfileItem } from '$lib/github-profile-item.type';

export const load: PageLoad = async () => {
	const usernames = ['johnsoncodehk', 'antfu', 'railsstudent', 'danielkellyio', 'hootlex', 'MooseSaeed'];
	const profilesSettled = await Promise.allSettled(
        usernames.map((username) => fetchGithubProfile(username))
    );

    const profiles = profilesSettled.reduce((acc, result, idx) => {
        if (result.status === 'fulfilled') {
            return acc.concat({
                key: idx,
                profile: result.value,
            });
        } else {
            return acc.concat({
                key: idx,
                error: `Error fetching profile: ${result.reason}`
            });

        }
    }, [] as GithubProfileItem[])
    
	return {
		data: profiles
	};
};
// This load function returns an array of GitHub usernames.
