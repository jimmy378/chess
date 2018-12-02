import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { Theme } from '.';

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<typeof Theme>;

export { createGlobalStyle, css, keyframes, ThemeProvider, styled };
