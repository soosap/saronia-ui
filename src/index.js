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
import { Link } from './components/Link';
import { Logo } from './components/Logo';
import { Card } from './components/Card';
import { Tag, Tags } from './components/Tag';
import { Image } from './components/Image';
import { Spinner } from './components/Spinner';
import { Navigation } from './components/Navigation';
import { Segment, Row, Column, Footer, Header } from './components/layout';
import {
  Timeline,
  TimelineEvent,
  KeyValue,
  KeyValuePair,
  KeyValuePairs,
} from './components/list';
import { Title, Subtitle } from './components/heading';
import {
  Form,
  Field,
  FieldLabel,
  Input,
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
  Card,
  Label,
  Icon,
  Link,
  Logo,
  Image,
  Spinner,
  Navigation,
  Tag,
  Tags,
  // button
  Button,
  RawButton,
  LinkButton,
  PulseButton,
  Buttons,
  // layout
  Segment,
  Row,
  Column,
  Footer,
  Header,
  // list
  Timeline,
  TimelineEvent,
  KeyValue,
  KeyValuePair,
  KeyValuePairs,
  // heading
  Title,
  Subtitle,
  // form
  Form,
  Field,
  FieldLabel,
  Input,
  Radio,
  TextArea,
  ContextMessage,
};
