module.exports = {
	baseBranch: "main",
	labels: [
		{
			name: "documentation",
			releaseType: "none",
		},
		{
			name: "bug",
			releaseType: "patch",
		},
		{
			name: "feature",
			releaseType: "minor",
		},
		{
			name: "breaking",
			releaseType: "major",
		},
	],
	prereleaseBranches: [
		{ name: "next", prerelease: "rc" },
	],
	noVersionPrefix: true,
};
