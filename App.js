import { NavigationContainer } from '@react-navigation/native';

import '@aws-amplify/ui-react/styles.css';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AiOutlineHome, AiFillPlusSquare, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineGames } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppHeader from './src/views/AppHeader';
import Dashboard from './src/views/Dashboard';
import createNavigator from './src/components/Navigator';
import SelectGame from './src/views/SelectGame';
import colors from './src/const/colors';

const HighScoreGames = createBottomTabNavigator();

EStyleSheet.build();

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    color: colors.dark,
    fontSize: '1.25rem',
  },
  text: {
    color: colors.dark,
    fontSize: '0.75rem',
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* TODO: REMOVE <StatusBar style="auto" />
        <AppHeader /> */}
        <HighScoreGames.Navigator
          screenOptions={{
            animationEnabled: true,
            cardOverlayEnabled: true,
            presentation: 'card',
            headerMode: 'float',
            tabBarActiveBackgroundColor: colors.light,
            tabBarIconStyle: styles.icon,
            tabBarLabelStyle: styles.text,
          }}
        >
          <HighScoreGames.Screen
            component={Dashboard}
            options={{
              tabBarIcon: () => (
                <AiOutlineHome />
              ),
            }}
            name="Home"
          />
          <HighScoreGames.Screen
            component={Dashboard}
            options={{
              tabBarIcon: () => (
                <BsTrophy />
              ),
            }}
            name="Scores"
          />
          <HighScoreGames.Screen
            component={SelectGame}
            options={{
              tabBarIcon: () => (
                <AiFillPlusSquare />
              ),
            }}
            name="Create"
          />
          <HighScoreGames.Screen
            component={Dashboard}
            options={{
              tabBarIcon: () => (
                <MdOutlineGames />
              ),
            }}
            name="Recent"
          />
          <HighScoreGames.Screen
            component={Dashboard}
            options={{
              tabBarIcon: () => (
                <AiOutlineMenu />
              ),
            }}
            name="Settings"
          />
        </HighScoreGames.Navigator>
      </View>
    </NavigationContainer>
  );
}
