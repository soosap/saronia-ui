/* @flow */
const PRIMARY = '#FFCA33';
const Primary = {
  LIGHT: '#FFD14D',
  LIGHTER: '#FFD96C',
  DARK: '#FFBE00',
  DARKER: '#F9BA00',
};

const SECONDARY = '#F37C4A';
const Secondary = {
  LIGHT: '#F48759',
  LIGHTER: '#F48B5F',
  DARK: '#F16B33',
  DARKER: '#F05B1D',
};

const BLACK_SUEDE_BEHR = '#3D3E3C';
const BLACK_BENJAMIN_MOORE = '#323233';
const BLACK_TRICORN_SHERWIN_WILLIAMS = '#2F2F30';

const BLACK = BLACK_BENJAMIN_MOORE;
const Black = {
  LIGHT: BLACK_SUEDE_BEHR,
  MODERATE: BLACK_BENJAMIN_MOORE,
  STRONG: BLACK_TRICORN_SHERWIN_WILLIAMS,
  TRANSPARENT: 'rgba(50, 50, 51, 0.76)',
};

const NORMAL_WHITE = '#FFFFFF';
const SEETHA_WHITE = '#FCFCFA';
const DUGORIM_WHITE = '#FAF7F5';

const WHITE = SEETHA_WHITE;
const White = {
  LIGHT: NORMAL_WHITE,
  MODERATE: SEETHA_WHITE,
  STRONG: DUGORIM_WHITE,
};

const ICE_CUBED_SILVER_BENJAMIN_MOORE = '#DDE2E2';
const SARONIA_GRAY = '#D2D7D9';
const FEATHER_GRAY_BENJAMIN_MOORE = '#C5CCD1';

const GRAY = SARONIA_GRAY;
const Gray = {
  LIGHT: ICE_CUBED_SILVER_BENJAMIN_MOORE,
  MODERATE: SARONIA_GRAY,
  STRONG: FEATHER_GRAY_BENJAMIN_MOORE,
};

const ALABASTER_SHERWIN_WILLIAMS = '#EDEAE0';
const GREEK_VILLA_SHERWIN_WILLIAMS = '#F0ECE2';
const MARITIME_WHITE_BENJAMIN_MOORE = '#E6DFCF';

const CREME = ALABASTER_SHERWIN_WILLIAMS;
const Creme = {
  LIGHT: GREEK_VILLA_SHERWIN_WILLIAMS,
  MODERATE: ALABASTER_SHERWIN_WILLIAMS,
  STRONG: MARITIME_WHITE_BENJAMIN_MOORE,
};

const Context = {
  DANGER: 'hsl(348, 100%, 61%)',
  SUCCESS: 'hsl(141, 71%,  48%)',
  WARNING: 'hsl(48, 100%, 67%)',
  INFO: 'hsl(217, 71%, 53%)',
};

export default {
  PRIMARY,
  Primary,
  SECONDARY,
  Secondary,
  BLACK,
  Black,
  WHITE,
  White,
  GRAY,
  Gray,
  CREME,
  Creme,
  Context,
};