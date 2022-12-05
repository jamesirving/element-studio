import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: '0',
  padding: '0',
  border: '0',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  lineHeight: '2',
});

globalStyle('body', {
  fontSize: '16px',
});
