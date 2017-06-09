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
import { Tags, Tag } from '../../Tag';

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
      keyWidth: text('keyWidth', '90px'),
    });

    return (
      <KeyValue {...props}>
        <KeyValuePair>
          <div>tags</div>
          <Tags>
            <Tag>wildlife</Tag>
            <Tag>animal</Tag>
            <Tag>marine</Tag>
            <Tag>endangered</Tag>
          </Tags>
        </KeyValuePair>
        <KeyValuePairs pairs={number('pairs', 2)}>
          <KeyValuePair>
            <div>createdBy</div>
            <div>soosap</div>
          </KeyValuePair>
          <KeyValuePair>
            <div>updatedBy</div>
            <div>soosap</div>
          </KeyValuePair>
          <KeyValuePair>
            <div>createdAt</div>
            <div>2 days ago</div>
          </KeyValuePair>
          <KeyValuePair>
            <div>updatedAt</div>
            <div>2 minutes ago</div>
          </KeyValuePair>
        </KeyValuePairs>
      </KeyValue>
    );
  });
