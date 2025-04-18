import { useEffect } from 'react';
import { Alert, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/src/constants/Colors';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, Slot, Stack, Tabs, useSegments } from 'expo-router';
import 'react-native-reanimated';
// context
import { ContextProvider, useStoreContext } from '@/src/context/Context';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/src/store/store';
// hooks
import { useAuth } from '../hooks/useAuth';

const MainLayout = () => {
  // auth
  const { isAuthenticated, accessToken, user, isLoading } = useAuth();
  const segments = useSegments();
  // theme
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  useEffect(() => {
    if (typeof isAuthenticated === 'undefined') return;
    const isInApp = segments[0];
    const targetRoute: any = isAuthenticated ? '(tabs)' : 'signin';

    if (isInApp !== isAuthenticated) {
      router.replace(targetRoute);
    }
    if (user) {
      // dispatch(getAction('expert/', 'EXPERT'))
      // dispatch(getAction('video/', 'VIDEO'))
      // dispatch(getAction('shop/product/', 'PRODUCT'))
      // dispatch(getAction('shop/category/', 'CATEGORY'))
      // dispatch(getAction('study/topic/', 'TOPIC'))
      // dispatch(getAction('study/course/', 'COURSE'))
      // dispatch(getAction('podcast/', 'PODCAST'))
    }
  }, [isAuthenticated, dispatch])
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
