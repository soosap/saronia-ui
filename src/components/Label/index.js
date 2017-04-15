/* @flow */
import R from 'ramda';
import styled from 'styled-components';
import type { Position, Size } from '../../types';

import { colors, fonts, borders } from '../../assets/styles';

type Props = {
  arrow?: Position,
  size?: Size,
  inverted?: boolean,
  primary?: boolean,
  secondary?: boolean,
};

const getBackgroundColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('primary', true)),
    R.always(colors.white),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('secondary', true)),
    R.always(colors.white),
  ],
  [R.propEq('inverted', true), R.always(colors.white)],
  [R.propEq('primary', true), R.always(colors.primary)],
  [R.propEq('secondary', true), R.always(colors.secondary)],
  [R.T, R.always(colors.grey)],
]);

const getSize = R.cond([
  [R.propEq('size', 'mini'), R.always(fonts.sizes.mini)],
  [R.propEq('size', 'tiny'), R.always(fonts.sizes.tiny)],
  [R.propEq('size', 'small'), R.always(fonts.sizes.small)],
  [R.propEq('size', 'medium'), R.always(fonts.sizes.medium)],
  [R.propEq('size', 'large'), R.always(fonts.sizes.large)],
  [R.propEq('size', 'big'), R.always(fonts.sizes.big)],
  [R.propEq('size', 'huge'), R.always(fonts.sizes.huge)],
  [R.propEq('size', 'massive'), R.always(fonts.sizes.massive)],
]);

const getBorderColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('primary', true)),
    R.always(colors.primary),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('secondary', true)),
    R.always(colors.secondary),
  ],
  [
    R.both(R.propEq('primary', false), R.propEq('secondary', false)),
    R.always(colors.grey),
  ],
  [R.T, R.always(colors.transparent)],
]);

const Label = styled.label`
   display: inline-block;
   line-height: 1;
   vertical-align: baseline;
   margin: 0em 0.14285714em;
   background-color: ${getBackgroundColor};
   background-image: none;
   padding: 0.5833em 0.833em;
   color: rgba(0, 0, 0, 0.6);
   text-transform: none;
   font-size: ${getSize};
   font-family: ${fonts.system};
   font-weight: bold;
   border: ${borders.width.thin} solid ${getBorderColor};
   border-radius: ${borders.radius};

   &:first-child {
       margin-left: 0em;
   }
   &:last-child {
       margin-right: 0em;
   }

   ${props => props.arrow ? 'position: relative' : null};
   ${props => props.arrow == 'left' ? { ...leftArrow } : null};
   ${props => props.arrow == 'right' ? { ...rightArrow } : null};
   ${props => props.arrow == 'top' ? { ...topArrow } : null};
   ${props => props.arrow == 'bottom' ? { ...bottomArrow } : null};

   &:before {
      ${props => props.arrow ? { ...labelBefore } : null};
      ${props => props.arrow ? { ...arrowLabelBefore } : null};
      ${props => props.arrow == 'left' ? { ...leftArrowBefore } : null};
      ${props => props.arrow == 'right' ? { ...rightArrowBefore } : null};
      ${props => props.arrow == 'top' ? { ...topArrowBefore } : null};
      ${props => props.arrow == 'bottom' ? { ...bottomArrowBefore } : null};
   }
`;

const labelBefore = {
  backgroundColor: 'inherit',
  backgroundImage: 'inherit',
  borderWidth: borders.width.thin,
  borderStyle: 'solid',
  borderColor: 'inherit',
};
const arrowLabelBefore = {
  position: 'absolute',
  content: '""',
  WebkitTransform: 'rotate(45deg)',
  transform: 'rotate(45deg)',
  backgroundImage: 'none',
  zIndex: '2',
  width: '0.6666em',
  height: '0.6666em',
};
const leftArrow = {
  marginTop: '0em',
  marginLeft: '0.6666em',
};
const leftArrowBefore = {
  borderWidth: '0px 0px 1px 1px',
  WebkitTransform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  bottom: 'auto',
  right: 'auto',
  top: '50%',
  left: '0em',
};
const rightArrow = {
  marginTop: '0em',
  marginRight: '0.6666em',
};
const rightArrowBefore = {
  borderWidth: '1px 1px 0px 0px',
  WebkitTransform: 'translateX(50%) translateY(-50%) rotate(45deg)',
  transform: 'translateX(50%) translateY(-50%) rotate(45deg)',
  bottom: 'auto',
  right: '0%',
  top: '50%',
  left: 'auto',
};
const topArrow = {
  marginTop: '1em',
};
const topArrowBefore = {
  borderWidth: '1px 0px 0px 1px',
  WebkitTransform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  top: '0',
  left: '50%',
};
const bottomArrow = {
  marginTop: '0em',
  marginBottom: '1em',
};
const bottomArrowBefore = {
  borderWidth: '0px 1px 1px 0px',
  WebkitTransform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  top: '100%',
  left: '50%',
};

export default Label;
