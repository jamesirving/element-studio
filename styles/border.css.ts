import { palette } from './palette.css';

export const borderSize = {
  'border-size-1': '1px',
  'border-size-2': '2px',
  'border-size-3': '5px',
  'border-size-4': '10px',
  'border-size-5': '25px',
};

export const borderStyle = {
  solid: 'solid',
  none: 'none',
  dashed: 'dashed',
};

export const borderRadius = {
  'radius-1': '4px',
  'radius-2': '10px',
  'radius-3': '1rem',
  'radius-4': '2rem',
  'radius-5': '4rem',
  'radius-6': '8rem',
  'radius-round': '1e5px',
};

export const shadows = {
  'shadow-sm': `0 0 10px ${palette['tertiary-500']}26`,
  'shadow-md': `0 0 10px ${palette['tertiary-500']}80`,
  'shadow-lg': `0 0 10px ${palette['tertiary-500']}FF`,
  'shadow-info': `0 0 10px ${palette['info-400']}80`,
  'shadow-secondary': `0 4px 10px ${palette['secondary-500']}26`,
  'shadow-none': 'none',
};
