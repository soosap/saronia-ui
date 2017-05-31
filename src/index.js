/* @flow */
import { injectGlobal } from 'styled-components';
import { Font, FONT_URL } from './lib/constants';

import { Button, Buttons } from './components/Button';
import { Icon } from './components/Icon';
import { Label } from './components/Label';
import { Segment } from './components/Segment';
import { List, ListItem } from './components/List';
import { Spinner } from './components/Spinner';
import { Link } from './components/Link';

import { Title, Subtitle, Headings } from './components/headings';
import {
  Form,
  Field,
  FieldLabel,
  Input,
  Radio,
  TextArea,
  ContextMessage,
} from './components/forms';

export const generateAndInjectGlobalCSS = () => injectGlobal`
  @font-face {
    font-family: ${Font.SYSTEM};
    font-family: ${Font.ACCENT};
    src: url(${FONT_URL});
  }

  body {
    font-family: ${Font.SYSTEM};
    margin: 0;
  }
`;

export {
  Button,
  Buttons,
  Label,
  Segment,
  Icon,
  List,
  ListItem,
  Spinner,
  Link,
  // heading
  Title,
  Subtitle,
  Headings,
  // forms
  Form,
  Field,
  FieldLabel,
  Input,
  Radio,
  TextArea,
  ContextMessage,
};
