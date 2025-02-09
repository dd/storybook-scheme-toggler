import type { AutoRc } from 'auto';


export default {
	baseBranch: 'main',
	labels: [
		{
			name: 'documentation',
			releaseType: 'none',
		},
		{
			name: 'bug',
			releaseType: 'patch',
		},
		{
			name: 'feature',
			releaseType: 'minor',
		},
		{
			name: 'breaking',
			releaseType: 'major',
		},
	],
	prereleaseBranches: ['next'],
	versionBranches: true,
} satisfies AutoRc;
