import type { GithubProfile } from './github-profile.type';

export function fetchGithubProfile(username: string, ): Promise<GithubProfile> {
	const url = `https://api.github.com/users/${username}`;
	return fetch(url, {
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
		}
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`GitHub profile not found for user: ${username}`);
			}
			return response.json() as Promise<GithubProfile>;
		})
		.catch((error) => {
			console.error('Error fetching GitHub profile:', error);
			throw error;
		});
}
