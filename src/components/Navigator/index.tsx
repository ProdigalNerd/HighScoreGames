import * as React from 'react';
import {
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  CommonActions,
  TabActionHelpers,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import NavIcon from './NavIcon';

import TabNavigationOptions from '../../types/TabNavigationOptions';
import colors from '../../const/colors';

// Props accepted by the view
type TabNavigationConfig = {
  tabBarStyle: StyleProp<ViewStyle>;
  contentStyle: StyleProp<ViewStyle>;
};

// Map of event name and the type of data (in event.data)
//
// canPreventDefault: true adds the defaultPrevented property to the
// emitted events.
type TabNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean };
    canPreventDefault: true;
  };
};

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap
> &
  TabRouterOptions &
  TabNavigationConfig;

const styles = EStyleSheet.create({
  iconContainer: {
    boxShadow: `0 0 1rem ${colors.light}`,
  },
  navIcon: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.light,
    boxShadow: `inset 0rem 0rem 1rem ${colors.light}`,
    padding: '1rem',
  },
  'navIcon:last-child': {
    borderRightWidth: 0,
  },
  largeIcon: {
    flex: 1.5,
  }
});

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}: Props) {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      TabNavigationOptions,
      TabNavigationEventMap
    >(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  console.log(descriptors);

  return (
    <NavigationContent>
      <View style={[{ flex: 1 }, contentStyle]}>
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                EStyleSheet.absoluteFillObject,
                { display: i === state.index ? 'flex' : 'none' },
              ]}
            >
              {descriptors[route.key].render()}
            </View>
          );
        })}
      </View>
      <View 
        style={[
          { flexDirection: 'row' },
          tabBarStyle,
          styles.iconContainer
        ]}
      >
        {state.routes.map((route, index) => (
          <Pressable
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
                data: {
                  isAlreadyFocused: route.key === state.routes[state.index].key,
                },
              });

              if (!event.defaultPrevented) {
                navigation.dispatch({
                  ...CommonActions.navigate({ name: route.name, merge: true }),
                  target: state.key,
                });
              }
            }}
            style={[
              { flex: 1 },
              EStyleSheet.child(styles, 'navIcon', index, state.routes.length),
              route.name === "Create" && styles.largeIcon
            ]}
          >
            <NavIcon
              routeOptions={descriptors[route.key].options}
              name={route.name}
            />
          </Pressable>
        ))}
      </View>
    </NavigationContent>
  );
}

export default createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap,
  typeof TabNavigator
>(TabNavigator);