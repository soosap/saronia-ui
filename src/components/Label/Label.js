// /* @flow */
// import R from 'ramda';
// import React from 'react';
// import styled from 'styled-components';
// import type { Position, Size, Type } from '../../types';
//
// import { colors, fonts, borders } from '../../assets/styles';
//
// type Props =
//   | {|
//       size?: Size,
//       arrow?: Position,
//       type?: Type,
//       inverted?: boolean,
//     |}
//   | {|
//       circular: true,
//       radius: Size,
//       size?: Size,
//       type?: Type,
//       inverted?: boolean,
//     |};
//
// const labelBefore = {
//   'background-color': 'inherit',
//   'background-image': 'inherit',
//   'border-width': borders.width.thin,
//   'border-style': 'solid',
//   'border-color': 'inherit',
// };
//
// const arrowLabelBefore = {
//   position: 'absolute',
//   content: '""',
//   transform: 'rotate(45deg)',
//   'background-image': 'none',
//   'z-index': '2',
//   width: '0.6666em',
//   height: '0.6666em',
// };
//
// const leftArrow = {
//   'margin-top': '0',
//   'margin-left': '0.5em',
// };
//
// const leftArrowBefore = {
//   'border-width': '0px 0px 1px 1px',
//   transform: 'translateX(-53%) translateY(-53%) rotate(45deg)',
//   bottom: 'auto',
//   right: 'auto',
//   top: '50%',
//   left: '0',
// };
//
// const rightArrow = {
//   'margin-top': '0',
//   'margin-right': '0.5em',
// };
//
// const rightArrowBefore = {
//   'border-width': '1px 1px 0 0',
//   transform: 'translateX(53%) translateY(-53%) rotate(45deg)',
//   bottom: 'auto',
//   right: '0',
//   top: '50%',
//   left: 'auto',
// };
//
// const topArrow = {
//   'margin-top': '0.5em',
// };
//
// const topArrowBefore = {
//   'border-width': '1px 0 0 1px',
//   transform: 'translateX(-53%) translateY(-53%) rotate(45deg)',
//   top: '0',
//   left: '50%',
// };
//
// const bottomArrow = {
//   'margin-top': '0',
//   'margin-bottom': '0.5em',
// };
//
// const bottomArrowBefore = {
//   'border-width': '0 1px 1px 0',
//   transform: 'translateX(-47%) translateY(-47%) rotate(45deg)',
//   top: '100%',
//   left: '50%',
// };
//
// const getBackgroundColor = R.cond([
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', undefined)),
//     R.always(colors.white),
//   ],
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', 'secondary')),
//     R.always(colors.white),
//   ],
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', 'primary')),
//     R.always(colors.white),
//   ],
//   [R.propEq('type', 'primary'), R.always(colors.primary)],
//   [R.propEq('type', 'secondary'), R.always(colors.secondary)],
//   [R.propEq('inverted', true), R.always(colors.white)],
//   [R.T, R.always(colors.grey)],
// ]);
//
// const getBorderColor = R.cond([
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', 'primary')),
//     R.always(colors.primary),
//   ],
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', 'secondary')),
//     R.always(colors.secondary),
//   ],
//   [R.propEq('inverted', true), R.always(colors.grey)],
//   [R.T, R.always('transparent')],
// ]);
//
// const getColor = R.cond([
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', 'primary')),
//     R.always(colors.primary),
//   ],
//   [
//     R.both(R.propEq('inverted', true), R.propEq('type', 'secondary')),
//     R.always(colors.secondary),
//   ],
//   [R.T, R.always(colors.blackTransparent)],
// ]);
//
// const getSize = R.cond([
//   [R.propEq('size', 'mini'), R.always(fonts.sizes.mini)],
//   [R.propEq('size', 'tiny'), R.always(fonts.sizes.tiny)],
//   [R.propEq('size', 'small'), R.always(fonts.sizes.small)],
//   [R.propEq('size', 'medium'), R.always(fonts.sizes.medium)],
//   [R.propEq('size', 'large'), R.always(fonts.sizes.large)],
//   [R.propEq('size', 'big'), R.always(fonts.sizes.big)],
//   [R.propEq('size', 'huge'), R.always(fonts.sizes.huge)],
//   [R.propEq('size', 'massive'), R.always(fonts.sizes.massive)],
// ]);
//
// const getWidth = R.cond([
//   [R.propEq('radius', 'mini'), R.always('1rem')],
//   [R.propEq('radius', 'tiny'), R.always('1.3rem')],
//   [R.propEq('radius', 'small'), R.always('1.5rem')],
//   [R.propEq('radius', 'medium'), R.always('1.8rem')],
//   [R.propEq('radius', 'large'), R.always('2.1rem')],
//   [R.propEq('radius', 'big'), R.always('2.5rem')],
//   [R.propEq('radius', 'huge'), R.always('3rem')],
//   [R.propEq('radius', 'massive'), R.always('3.5rem')],
//   [R.T, R.always('inherit')],
// ]);
//
// const getPadding = R.cond([[R.T, R.always('0.2rem')]]);
//
// const Label = styled.label`
//   display: ${props => (props.circular ? 'flex' : 'inline-block')};
//   justify-content: ${props => (props.circular ? 'center' : undefined)};
//   align-items: ${props => (props.circular ? 'center' : undefined)};
//   overflow: ${props => (props.circular ? 'hidden' : undefined)};
//   padding: ${props => (props.circular ? getPadding : '0.5833em 0.833em')};
//   width: ${props => (props.circular ? getWidth : undefined)};
//   height: ${props => (props.circular ? getWidth : undefined)};
//   margin-left: ${props => (props.arrow == 'left' ? '0.5em !important' : undefined)};
//   margin-right: ${props => (props.arrow == 'right' ? '0.5em !important' : undefined)};
//   background-color: ${getBackgroundColor};
//   color: ${getColor};
//   font-size: ${getSize};
//   font-family: ${fonts.system};
//   border: ${borders.width.thin} solid ${getBorderColor};
//   border-radius: ${props => (props.circular ? '50%' : borders.radius)};
//   text-align: center;
//   background-image: none;
//   text-transform: none;
//   vertical-align: baseline;
//   line-height: 1em;
//   font-weight: bold;
//
//    &:first-child {
//        margin-left: 0em;
//    }
//    &:last-child {
//        margin-right: 0em;
//    }
//
//    ${props => (props.arrow ? 'position: relative' : null)};
//    ${props => (props.arrow == 'left' ? { ...leftArrow } : null)};
//    ${props => (props.arrow == 'right' ? { ...rightArrow } : null)};
//    ${props => (props.arrow == 'top' ? { ...topArrow } : null)};
//    ${props => (props.arrow == 'bottom' ? { ...bottomArrow } : null)};
//
//    &:before {
//       ${props => (props.arrow ? { ...labelBefore } : null)};
//       ${props => (props.arrow ? { ...arrowLabelBefore } : null)};
//       ${props => (props.arrow == 'left' ? { ...leftArrowBefore } : null)};
//       ${props => (props.arrow == 'right' ? { ...rightArrowBefore } : null)};
//       ${props => (props.arrow == 'top' ? { ...topArrowBefore } : null)};
//       ${props => (props.arrow == 'bottom' ? { ...bottomArrowBefore } : null)};
//    }
// `;
//
// export default (props: Props) => <Label {...props} />;
