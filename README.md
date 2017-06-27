# saronia-ui
React-based UI toolkit for the web.

![saronia-ui logo](https://ui.saronia.io/logo_saronia_ui.png)

* styled-components v2
* polished
* ramda
* flexbox

## Setup

```sh
# Clone the repository
git clone https://github.com/saronia/saronia-ui.git saronia-ui && cd $_

# Install node modules
yarn install

# Create a branch to work with following this pattern:
git checkout -b 'feature/subtitle' origin/master

# Start storybook using the following command
yarn run storybook

# Create storybook stories related to your component (copy-paste from other stories to get started)
touch src/components/Pill.js
touch src/stories/Pill.stories.js

# Work on the component and make frequent commits w/ well written commit messages
git add -A
git commit -m 'Added hover effects on <Pill /> component'

# Regularly push your work to obtain feedback
git push
git push -u origin fix/border-logic-card
```

## Development

1. `$ npm link` and then `$ yarn run dev` inside the **@saronia/saronia-ui** project
2. `$ npm link @saronia/saronia-ui` inside the target project

## Conventions

### rem vs. em

For consistency sake we exclusively use rem.
Read up the difference between the two [here](https://zellwk.com/blog/rem-vs-em/).

### Enum vs. Constant

Whenever the left-hand side is a mere lowercase representation of the right-hand side as in the example below, we add the **Enum** suffix to the variable name declaration.

```js
const SizeEnum = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}
```

On the contrary, whenever the left-hand side and the right-hand side do not match up as the example below, no additional suffix is being attached.
```js
const Color = {
  PRIMARY: '#FFB00C',
  SECONDARY: '#F2416C',
  WHITE: '#FFFFFF',
}
```

Following this pattern has an important benefit: FlowType definitions will not clash w/ constants and enums.

The **medium** value in _SizeEnum_ and the **moderate** value in the _IntensityEnum_ are the default values.

## Release

After making changes to the project that shall be published, fire `$ yarn release`. In the ensuing prompt select between **patch**, **minor**, and **major**.

## Contributors
* @DaniyarJakupov
* @soosap
