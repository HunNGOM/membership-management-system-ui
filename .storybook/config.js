import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/global-styles';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /stories\.tsx?/i), module);
