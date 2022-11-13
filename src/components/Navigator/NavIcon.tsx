import { FC, ReactNode } from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import colors from "../../const/colors";

type TabNavigationOptions = {
  renderIcon(): ReactNode;
  title?: string;
};

interface NavIconProps {
  routeOptions: TabNavigationOptions;
  name: string;
};

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

const NavIcon: FC<NavIconProps> = ({ routeOptions, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{routeOptions.renderIcon && routeOptions.renderIcon()}</View>
      <Text style={styles.text}>{routeOptions.title || name}</Text>
    </View>
  )
};

export default NavIcon;
