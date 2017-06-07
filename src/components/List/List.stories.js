/* @flow */
import R from 'ramda';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import { List, ListItem } from '.';
import { SizeEnum, BreedEnum } from '../../lib/constants';

const stories = storiesOf('List', module);
stories.addDecorator(withKnobs);

const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories.add('timeline', () => {
  const props = R.pickBy(isNotNil, {
    timeline: boolean('timeline', true),
    marginLeft: text('marginLeft', '75px'),
    gap: select('gap', R.invertObj(SizeEnum), 'medium'),
    type: select('type', typeOptions, undefined),
  });

  return (
    <List {...props} onClick={action('clicked')}>
      <ListItem labelTop="Mar 2017" labelBottom="Jan 2017">
        <div>Seetha</div>
        <div>Seetha</div>
        <div>Seetha</div>
      </ListItem>
      <ListItem labelTop="Dec 2016" labelBottom="Jun 2016">
        <div>Dugorim</div>
        <div>Dugorim</div>
        <div>Dugorim</div>
        <div>Dugorim</div>
      </ListItem>
      <ListItem labelTop="May 2016" labelBottom="Feb 2016">
        <div>Zalia</div>
      </ListItem>
    </List>
  );
});
