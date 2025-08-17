import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import 'react-native-reanimated';
import '../global.css';

// Storybook entry point
let AppEntryPoint = function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <GluestackUIProvider mode="light">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="dark" />
      </GluestackUIProvider>
    </ThemeProvider>
  );
};

// Switch to Storybook when environment variable is set
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('../.rnstorybook').default;
}

export default AppEntryPoint;
