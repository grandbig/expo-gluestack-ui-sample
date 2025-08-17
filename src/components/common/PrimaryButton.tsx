import React from 'react';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { IconSymbol } from '@/components/ui/IconSymbol';

export interface PrimaryButtonProps {
  /** ボタンのテキスト */
  text: string;
  /** アイコン名（オプショナル） */
  iconName?: 'house.fill' | 'paperplane.fill' | 'heart.fill' | 'chevron.right';
  /** ボタン押下時の処理 */
  onPress: () => void;
  /** ボタンサイズ */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** 無効化フラグ */
  disabled?: boolean;
  /** 追加のスタイルクラス */
  className?: string;
  /** アイコンサイズ */
  iconSize?: number;
  /** ボタンの幅制御 */
  fullWidth?: boolean;
}

/**
 * プライマリーボタンコンポーネント
 * variant='solid', action='primary'で統一されたボタン
 * アイコンの有無を簡単に制御可能
 */
export function PrimaryButton({
  text,
  iconName,
  onPress,
  size = 'lg',
  disabled = false,
  className,
  iconSize = 18,
  fullWidth = false,
}: PrimaryButtonProps) {
  // disabled状態のスタイリング
  const disabledStyles = disabled 
    ? 'opacity-50' 
    : '';
  
  const buttonClassName = fullWidth 
    ? `${className || ''} ${disabledStyles}` 
    : `self-start ${className || ''} ${disabledStyles}`;

  // disabled状態ではアイコンも薄くするが、見えるように調整
  const iconColor = disabled ? '#6B7280' : 'white';

  return (
    <Button
      size={size}
      variant="solid"
      action="primary"
      onPress={onPress}
      disabled={disabled}
      className={buttonClassName}
    >
      {iconName && (
        <ButtonIcon as={() => <IconSymbol name={iconName} size={iconSize} color={iconColor} />} />
      )}
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}