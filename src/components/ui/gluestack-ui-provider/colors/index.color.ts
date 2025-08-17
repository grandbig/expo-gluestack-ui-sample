/**
 * Gluestack色定義の統合ファイル
 * デフォルト色とコンポーネント色を統合してexport
 */

import { defaultColors } from './default.color';
import { buttonColors } from '../../button/colors';

export const allColors = {
  light: {
    ...defaultColors.light,
    ...buttonColors.light,
  },
  dark: {
    ...defaultColors.dark,
    ...buttonColors.dark,
  }
};

// 個別にもexport
export { defaultColors } from './default.color';
export { buttonColors } from '../../button/colors';