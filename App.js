import { NavigationContainer } from '@react-navigation/native';

import '@aws-amplify/ui-react/styles.css';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppHeader from './src/views/AppHeader';
import Dashboard from './src/views/Dashboard';
import { createNavigator } from './src/components/Navigator';

const HighScoreGames = createNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppHeader />
        <HighScoreGames.Navigator>
          <HighScoreGames.Screen component={Dashboard} name="Dashboard" />
        </HighScoreGames.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
