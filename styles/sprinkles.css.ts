import {
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from './vars.css';

/**
 * Implementation based on:
 * - https://github.com/seek-oss/vanilla-extract/blob/master/site/src/system/styles/sprinkles.css.ts
 * - https://github.com/rainbow-me/rainbowkit/blob/main/packages/rainbowkit/src/css/sprinkles.css.ts
 * - https://vanilla-extract.style/documentation/packages/sprinkles/
 */

const space = vars.spacing;

const negativeSpace = {
  '-1': `${calc(space['1']).negate()}`,
  '-2': `${calc(space['2']).negate()}`,
  '-3': `${calc(space['3']).negate()}`,
  '-4': `${calc(space['4']).negate()}`,
  '-5': `${calc(space['5']).negate()}`,
  '-6': `${calc(space['6']).negate()}`,
  '-7': `${calc(space['7']).negate()}`,
  '-8': `${calc(space['8']).negate()}`,
  '-9': `${calc(space['9']).negate()}`,
  '-10': `${calc(space['10']).negate()}`,
  '-11': `${calc(space['11']).negate()}`,
  '-12': `${calc(space['12']).negate()}`,
};

const margin = {
  ...space,
  ...negativeSpace,
};

const contentWidths = {
  'max-content': 'max-content',
  md: '888px',
  lg: '1024px',
  xl: '1130px',
};

const responsiveProperties = defineProperties({
  conditions: {
    // breakpoints based tailwind: https://tailwindcss.com/docs/screens
    sm: {},
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' },
    xl: { '@media': 'screen and (min-width: 1280px)' },
  },
  defaultCondition: 'sm',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    gridAutoFlow: ['row', 'row dense', 'column', 'column dense', 'dense'],
    gridTemplateColumns: {
      'cols-1': 'repeat(1, minmax(0, 1fr))',
      'cols-2': 'repeat(2, minmax(0, 1fr))',
      'cols-2-2-1': '2fr 1fr',
      'cols-2-4-1': '4fr 1fr',
      'cols-2-6-1': '6fr 1fr',
      'cols-3': 'repeat(3, minmax(0, 1fr))',
      'cols-4': 'repeat(4, minmax(0, 1fr))',
      'cols-4-max-content': 'repeat(4, minmax(0, max-content))',
    },
    gridColumn: {
      'full-2': '1 / 2',
      'full-3': '1 / 3',
      'full-4': '1 / 4',
      'full-6': '1 / 6',
      'second-full': '2 / -1',
      last: '-1',
    },
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifySelf: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignSelf: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    flexShrink: [0],
    gap: space,
    marginTop: margin,
    marginBottom: margin,
    marginLeft: margin,
    marginRight: margin,
    fontWeight: vars.fontWeight,
    textAlign: ['left', 'center', 'right'],
    pointerEvents: ['none', 'auto'],
    overflow: ['hidden'],
    opacity: vars.opacity,
    fontSize: vars.fontSize,
    textOverflow: ['ellipsis'],
    userSelect: ['none'],
    listStyle: ['none'],
    transition: {
      slow: 'transform .3s ease, opacity .3s ease, box-shadow .3s ease, border-color .3s ease, background-color .3s ease',
      fast: 'transform .15s ease, opacity .15s ease, box-shadow .15s ease, border-color .15s ease, background-color .3s ease',
    },
    strokeWidth: vars.borderSize,
    width: space,
    minWidth: space,
    minHeight: space,
    maxWidth: contentWidths,
    maxHeight: space,
    height: space,
    fontFamily: ['ProximaNova', 'ProximaNovaCondensed'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const eventProperties = defineProperties({
  conditions: {
    default: {},
    active: { selector: '&:active:not(:disabled)' },
    activeState: { selector: '&[data-state=active]' },
    hover: { selector: '&:hover:not(:disabled)' },
    focus: { selector: '&:focus' },
    focusVisible: { selector: '&:focus-visible' },
    focusWithin: { selector: '&:focus-within' },
    checked: { selector: '&[data-state="checked"]' },
    disabled: { selector: '&:disabled' },
    placeholder: { selector: '&::placeholder' },
  },
  defaultCondition: 'default',
  properties: {
    background: vars.palette,
    borderLeftColor: vars.palette,
    borderRightColor: vars.palette,
    borderTopColor: vars.palette,
    borderBottomColor: vars.palette,
    borderLeftWidth: { ...vars.spacing, ...vars.borderSize },
    borderRightWidth: { ...vars.spacing, ...vars.borderSize },
    borderTopWidth: { ...vars.spacing, ...vars.borderSize },
    borderBottomWidth: { ...vars.spacing, ...vars.borderSize },
    borderStyle: vars.borderStyle,
    boxShadow: vars.shadows,
    color: vars.palette,
    cursor: ['pointer', 'not-allowed'],
    fill: vars.palette,
    stroke: vars.palette,
    outline: ['none'],
    whiteSpace: ['nowrap', 'normal', 'pre-line'],
    outlineColor: vars.palette,
    outlineWidth: { ...vars.spacing, ...vars.borderSize },
    outlineStyle: vars.borderStyle,
  },
  shorthands: {
    borderColor: ['borderLeftColor', 'borderRightColor', 'borderBottomColor', 'borderTopColor'],
    borderWidth: ['borderLeftWidth', 'borderRightWidth', 'borderBottomWidth', 'borderTopWidth'],
  },
});

const animationProperties = defineProperties({
  conditions: {
    default: {},
    reduceMotion: { '@media': '(prefers-reduced-motion: reduce)' },
  },
  defaultCondition: 'default',
  properties: {
    transitionDuration: vars.duration,
    animationDuration: vars.duration,
    animationTimingFunction: vars.timing,
    animationDelay: vars.duration,
  },
});

export type ResponsiveValue<Value extends string | number | boolean> = RequiredConditionalValue<
  typeof responsiveProperties,
  Value
>;

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties);

const unresponsiveProperties = defineProperties({
  properties: {
    flex: [0, 1],
    flexWrap: ['wrap', 'nowrap'],
    top: space,
    bottom: space,
    left: space,
    right: space,
    flexShrink: [0],
    flexGrow: [0, 1],
    userSelect: ['auto', 'text', 'none', 'contain', 'all'],
    touchAction: ['auto', 'none'],
    zIndex: [-1, 0, 1, 2],
    borderTopLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    lineHeight: ['1', '1.1', '1.2'],
    letterSpacing: ['0', '0.025em', '0.1em'],
    textTransform: ['none', 'uppercase', 'lowercase', 'capitalize'],
    textDecoration: ['none'],
    overflowY: ['hidden', 'scroll', 'visible'],
    overflowX: ['hidden', 'scroll', 'visible'],
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
    borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  animationProperties,
  eventProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
