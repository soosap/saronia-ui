#saronia-ui

## Setup

```sh
# Clone the repository
git clone https://github.com/saronia/saronia-ui.git saronia-ui && cd $_

# Install node modules
yarn install

# Create a branch to work with following this pattern:
git checkout -b 'pill' origin/master

# Create storybook stories related to your component (copy-paste from other stories to get started)
touch src/components/Pill.js
touch src/stories/Pill.stories.js

# Work on the component and make frequent commits w/ well written commit messages
git add -A
git commit -m 'Added hover effects on <Pill /> component'

# Regularly push your work to obtain feedback
git push
```
