import React from 'react';
import { View } from 'react-native';
import theme from '@src/global/styles/theme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';


export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}