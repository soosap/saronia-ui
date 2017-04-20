saronia-ui is a set of React components built using flexbox and styled-components.

# Setup

```sh
# Clone the repository
git clone https://github.com/saronia/saronia-ui.git saronia-ui && cd $_

# Install node modules
yarn install

# Create a branch to work with following this pattern:
git checkout -b 'pill' origin/master

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
```

# Components

## Button

### props

#### circular | radius
`<Button circular radius='huge'>Register</Button>`
Renders a circular button whose radius can be controlled by a separate prop.

#### icon | iconPosition
`<Button icon={XYZ} iconPosition='right'>Subscribe</Button>`
Renders the default button with an icon attached. The position of the icon can be controlled via a separate prop.

## Icon

In order to add new icons to the application, determine the icon's svg path and add it to `src/assets/constants/icon`;
You can then use the icon component like this:

```js
<Icon svgPath={IconSVGPath.TWITTER} size='massive' type='primary' />
```
To make the icons available to the user of the library we export both, the component itself and the paths object. Alternatively, you could only import the the component and pass it a special svg path that is unique to the application being developed.

```js
import { Icon } from '@saronia/saronia-ui';
import { IconSVGPath } from '@saronia/saronia-ui/constants';
```

# Conventions

## rem vs. em

For consistency sake we exclusively use rem.
Read up the difference between the two [here](https://zellwk.com/blog/rem-vs-em/).

## Enum vs. Constant

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

# Contributors

* @DaniyarJakupov
* @soosap
