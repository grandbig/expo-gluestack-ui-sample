'use client';
import { vars } from 'nativewind';
import { allColors } from './colors/index.color';

/**
 * Gluestack UI Provider の設定
 * 色定義は ./colors/ ディレクトリで管理
 */
export const config = {
  light: vars(allColors.light),
  dark: vars(allColors.dark),
};
