import type { GithubProfile } from './github-profile.type';

export type GithubProfileItem = { 
    key: number; 
    profile?: GithubProfile; 
    error?: string 
}
