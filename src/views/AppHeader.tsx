import { StyleSheet, Text, View } from 'react-native';
import { Image } from '@aws-amplify/ui-react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppHeader = () => {
  return (
    <View style={styles.container} >
      <Image
        alt="High Score Games logo"
        src={require('../..//assets/logo.png')}
        objectFit="initial"
        objectPosition="50% 50%"
        backgroundColor="initial"
        height="75%"
        width="75%"
        opacity="100%"
      />
    </View>
  );
};

export default AppHeader;
