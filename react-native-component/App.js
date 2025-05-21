import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/App';
import MyButton from './src/Components/MyComponent';

export function App() {
  const name = "TAEYEON"

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name=="Mal-Dong" || "Default Name"}</Text>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 20
  }
});
