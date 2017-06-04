/* @flow */
import React from 'react';

import RawButton from './RawButton';
import type { Props } from './Button';

const LinkButton = RawButton.withComponent('a');

export default (props: Props) => <LinkButton {...props} />;
