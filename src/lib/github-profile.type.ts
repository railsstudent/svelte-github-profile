export type GithubProfile = {
	login: string;
	name: string;
	followers: number;
	following: number;
	html_url: string;
	avatar_url: string;
	bio: string | null;
	public_repos: number;
};
