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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'デフォルトボタン',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'ホームボタン',
    iconName: 'house.fill',
  },
};

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

export const FullWidth: Story = {
  args: {
    text: '全幅ボタン',
    fullWidth: true,
    iconName: 'house.fill',
  },
};

export const Disabled: Story = {
  args: {
    text: '無効ボタン',
    disabled: true,
    iconName: 'heart.fill',
  },
};