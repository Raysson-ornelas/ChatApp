import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

export default function Home() {
  return (
    <View className="bg-red-500 flex-1">
      <Text>Open up App.tsx to start working on your app!aa</Text>
      <StatusBar style="auto" />
    </View>
  );
}
registerRootComponent(Home);
