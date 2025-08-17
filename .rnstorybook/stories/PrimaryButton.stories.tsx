import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { PrimaryButton } from '../../src/components/common/PrimaryButton';
import { GluestackUIProvider } from '../../src/components/ui/gluestack-ui-provider';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <GluestackUIProvider mode="light">
        <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
          <Story />
        </View>
      </GluestackUIProvider>
    ),
  ],
  args: {
    text: 'ボタン',
    onPress: () => console.log('ボタンが押されました'),
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'ボタンに表示するテキスト',
    },
    iconName: {
      control: 'select',
      options: [undefined, 'house.fill', 'heart.fill', 'paperplane.fill'],
      description: 'ボタンに表示するアイコン',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'ボタンのサイズ',
    },
    disabled: {
      control: 'boolean',
      description: 'ボタンを無効化するかどうか',
    },
    fullWidth: {
      control: 'boolean',
      description: 'ボタンを全幅表示するかどうか',
    },
    iconSize: {
      control: { type: 'range', min: 12, max: 32, step: 2 },
      description: 'アイコンのサイズ',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// ===== 基本スタイル =====
export const Default: Story = {
  args: {
    text: 'デフォルトボタン',
  },
};

// ===== アイコン付きボタン =====
export const WithHomeIcon: Story = {
  args: {
    text: 'ホームボタン',
    iconName: 'house.fill',
  },
};

export const WithHeartIcon: Story = {
  args: {
    text: 'お気に入り',
    iconName: 'heart.fill',
  },
};

export const WithSendIcon: Story = {
  args: {
    text: '送信',
    iconName: 'paperplane.fill',
  },
};

// ===== サイズバリエーション =====
export const SmallSize: Story = {
  args: {
    text: '小さいボタン',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    text: '中くらいボタン',
    size: 'md',
    iconName: 'house.fill',
  },
};

export const LargeSize: Story = {
  args: {
    text: '大きいボタン',
    size: 'lg',
    iconName: 'heart.fill',
  },
};

export const ExtraLargeSize: Story = {
  args: {
    text: 'とても大きいボタン',
    size: 'xl',
    iconName: 'paperplane.fill',
  },
};

// ===== レイアウトオプション =====
export const FullWidth: Story = {
  args: {
    text: '全幅ボタン',
    fullWidth: true,
    iconName: 'house.fill',
  },
};

// ===== 状態バリエーション =====
export const Disabled: Story = {
  args: {
    text: '無効ボタン',
    disabled: true,
    iconName: 'heart.fill',
  },
};