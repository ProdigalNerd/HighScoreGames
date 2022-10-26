import { View, StyleSheet } from 'react-native';
import {
  useNavigationBuilder,
  TabRouter,
  createNavigatorFactory,
} from '@react-navigation/native';

const Navigator = ({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) => {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });
  return (
    <NavigationContent>
      <View style={[{ flex: 1 }, contentStyle]}>
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                { display: i === state.index ? 'flex' : 'none' },
              ]}
            >
              {descriptors[route.key].render()}
            </View>
          );
        })}
      </View>
    </NavigationContent>
  );
};

export const createNavigator = createNavigatorFactory(Navigator);

export default Navigator;