/**
 * Tailwind色定義の統合ファイル
 * デフォルト色とコンポーネント色を統合してexport
 */

import { defaultTailwindColors } from './default.tailwind.color';
import { buttonTailwindColors } from '../../button/colors';

export const allTailwindColors = {
  ...defaultTailwindColors,
  ...buttonTailwindColors,
};

// 個別にもexport
export { defaultTailwindColors } from './default.tailwind.color';
export { buttonTailwindColors } from '../../button/colors';