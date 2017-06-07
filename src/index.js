/* @flow */
import { injectGlobal } from 'styled-components';
import { Font, FONT_URL } from './lib/constants';

import {
  Button,
  LinkButton,
  RawButton,
  PulseButton,
  Buttons,
} from './components/Button';
import { Icon } from './components/Icon';
import { Label } from './components/Label';
import { Segment, Row, Column } from './components/layout';
import { List, ListItem } from './components/List';
import { Spinner } from './components/Spinner';
import { Link } from './components/Link';
import { Logo } from './components/Logo';
import { Card } from './components/Card';
import { Navigation } from './components/Navigation';

import { Title, Subtitle } from './components/heading';
import {
  Form,
  Field,
  FieldLabel,
  Input,
  InputWithAddons,
  Radio,
  TextArea,
  ContextMessage,
} from './components/form';

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
  RawButton,
  LinkButton,
  PulseButton,
  Buttons,
  Card,
  Label,
  Icon,
  List,
  ListItem,
  Spinner,
  Link,
  Logo,
  Navigation,
  // layout
  Segment,
  Row,
  Column,
  // heading
  Title,
  Subtitle,
  // form
  Form,
  Field,
  FieldLabel,
  Input,
  InputWithAddons,
  Radio,
  TextArea,
  ContextMessage,
};
