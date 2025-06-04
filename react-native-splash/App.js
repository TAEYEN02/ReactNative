import { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as  SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'
import Entypo from '@expo/vector-icons/Entypo'

SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration:1000,
//   fade:true,
// })

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <Text>SplashScreen Demo</Text>
      <Entypo name='rocket' size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
