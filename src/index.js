/* @flow */
import { injectGlobal } from 'styled-components';
import { Font, FONT_URL } from './lib/constants';

import { Button, Buttons } from './components/Button';
import { Icon } from './components/Icon';
import { Label } from './components/Label';
import { Segment } from './components/Segment';
import { List, ListItem } from './components/List';

import { H1, H2, H3, H4, H5, H6 } from './components/headings';
import { Field, FieldLabel, Input, Radio, TextArea } from './components/forms';

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
  // heading
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  // forms
  Field,
  FieldLabel,
  Input,
  Radio,
  TextArea,
};
