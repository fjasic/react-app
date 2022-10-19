module.exports = {
    "branches": ["main"],
    "repositoryUrl": "https://github.com/fjasic/react-app",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github", {
            "assets": [
                {"path": "build.zip", "label": "build"},
                {"path": "coverage.zip", "label": "coverage"},

            ]
        }],
        
    ]
}