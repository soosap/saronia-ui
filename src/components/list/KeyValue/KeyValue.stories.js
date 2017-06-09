/* @flow */
import React from 'react';
import R from 'ramda';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { KeyValue, KeyValuePair, KeyValuePairs } from '.';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('KeyValue', module);
stories
  .addDecorator(withKnobs).addDecorator(centered);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <KeyValue {...props}>
        <KeyValuePair>
          <div>language</div>
          <div>Tamil</div>
        </KeyValuePair>
        <KeyValuePairs>
          <KeyValuePair>
            <div>createdBy</div>
            <div>soosap</div>
          </KeyValuePair>
          <KeyValuePair>
            <div>updatedBy</div>
            <div>soosap</div>
          </KeyValuePair>
        </KeyValuePairs>
      </KeyValue>
    );
  });
