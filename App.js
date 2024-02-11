/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
import * as React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import RootNavigation from './src/navigations/RootNavigation';
// import { store } from './src/store';

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    // <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <PortalProvider>
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <PortalHost name="bottomSheet" />
            <RootNavigation />
          </SafeAreaProvider>
        </PortalProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
    // </Provider>
  );
}

export default App;
