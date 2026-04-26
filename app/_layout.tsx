import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <GestureHandlerRootView style={{ flex: 1, paddingBottom: insets.bottom}}>
      <StatusBar style="auto" translucent />
      <Slot />
    </GestureHandlerRootView>
  );
}