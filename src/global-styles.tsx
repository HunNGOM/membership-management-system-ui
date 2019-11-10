import { injectGlobal, Interpolation } from 'emotion';
import 'reset-css';

injectGlobal({
  html: {
    boxSizing: 'border-box',
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    height: '100%',
  },
  'body, #root': {
    height: '100%',
  },
  '*': {
    boxSizing: 'inherit',
    padding: 0,
    margin: 0,
    border: 0,
  },
} as Interpolation);

export const fontSizes = {
  small: '0.75rem',
  normal: '1rem',
  large: '1.125rem',
} as const;

export const greys = {
  g900: '#1A1A1A',
  g800: '#313131',
  g300: '#A3A3A3',
  g100: '#E8E8E8',
  g100WithOpacity33p: '#F7F7F7',
  g000: '#FFFFFF',
  g300WithOpacity33p: '#E0E0E0',
};
