import { configure } from '@storybook/react';
import '../src/global-styles';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /stories\.tsx?/i), module);
