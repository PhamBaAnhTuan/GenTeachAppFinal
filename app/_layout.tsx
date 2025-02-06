import { useEffect } from 'react';
import { Alert, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, Slot, Stack, Tabs, useSegments } from 'expo-router';
import 'react-native-reanimated';
// context
import { ContextProvider, useStoreContext } from '@/context/Context';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';
// actions
import { getAction } from '@/redux/actions';
import { Colors } from '@/constants/Colors';

const MainLayout = () => {
  // context
  const { router, useRedux, dispatch } = useStoreContext();
  // redux
  const { user, isAuthenticated, video } = useRedux;
  const segments = useSegments();
  // theme
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  useEffect(() => {
    if (typeof isAuthenticated === 'undefined') return;
    const isInApp = segments[0];
    const targetRoute = isAuthenticated ? '(tabs)' : 'signin';

    if (isInApp !== isAuthenticated) {
      router.replace(targetRoute);
    }
    // dispatch(getAction('video/', 'VIDEO'))
    // dispatch(getAction('shop/product/', 'PRODUCT'))
    // dispatch(getAction('shop/category/', 'CATEGORY'))
    // dispatch(getAction('chat/', 'EXPERT'))
    // dispatch(getAction('study/topic/', 'TOPIC'))
    // dispatch(getAction('study/course/', 'COURSE'))
    // dispatch(getAction('podcast/', 'PODCAST'))
  }, [isAuthenticated, router, dispatch])
  return (
    <>
      <Slot />
      <StatusBar backgroundColor={theme.background} />
    </>
  )
}

export default function RootLayout() {
  // theme
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ContextProvider>
              <MainLayout />
            </ContextProvider>
          </PersistGate>
        </Provider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
